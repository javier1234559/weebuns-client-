import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { AppButton } from '~/components/common/AppButton'
import { AppInput } from '~/components/common/AppInput'
import AppLoading from '~/components/common/AppLoading'
import MultiSelect from '~/components/ui/multiple-select'
import { Select, SelectItem } from '~/components/ui/select'
import { useSpacesById, useUpdateSpace } from '~/features/space/hooks/useSpaceQueries'
import { LANGUAGE_LABELS, LEVEL_LABELS, TARGET_LABELS, TOPIC_LABELS } from '~/features/space/space.constants'
import { LanguageCode, LevelCode, TargetCode, TopicCode } from '~/features/space/space.type'

interface UpdateSpaceModalProps {
  idSpace: string
  onClose: () => void
}

const updateSpaceSchema = yup.object({
  name: yup
    .string()
    .required('Please enter the name of the learning space')
    .min(1, 'Please enter the name of the learning space')
    .max(100, 'The name cannot exceed 100 characters'),
  description: yup
    .string()
    .required('Please enter a description')
    .min(1, 'Please enter a description')
    .max(500, 'The description cannot exceed 500 characters'),
  language: yup.mixed<LanguageCode>().oneOf(Object.values(LanguageCode)).required('Please select a language'),
  currentLevel: yup.mixed<LevelCode>().oneOf(Object.values(LevelCode)).required('Please select the current level'),
  targetLevel: yup.mixed<LevelCode>().oneOf(Object.values(LevelCode)).required('Please select the target level'),
  target: yup.mixed<TargetCode>().oneOf(Object.values(TargetCode)).required('Please select a learning purpose'),
  topics: yup
    .array()
    .of(yup.mixed<TopicCode>().oneOf(Object.values(TopicCode)))
    .min(1, 'Please select at least one topic of interest')
    .required('Please select topics of interest')
})

type UpdateSpaceFormData = yup.InferType<typeof updateSpaceSchema>

const steps = ['Basic Information', 'Learning Setup', 'Topic']

function UpdateSpaceModal({ idSpace, onClose }: UpdateSpaceModalProps) {
  const [activeStep, setActiveStep] = useState(0)
  const {
    control,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<UpdateSpaceFormData>({
    resolver: yupResolver(updateSpaceSchema)
  })

  const mutate = useUpdateSpace()
  const { data, isLoading } = useSpacesById(idSpace, {
    enabled: !!idSpace
  })

  useEffect(() => {
    if (data) {
      reset({
        name: data.space.name,
        description: data.space.description ?? '',
        language: data.space.language as NonNullable<LanguageCode>,
        currentLevel: data.space.currentLevel as NonNullable<LevelCode>,
        targetLevel: data.space.targetLevel as NonNullable<LevelCode>,
        target: data.space.target as NonNullable<TargetCode>,
        topics: data.space.topics as TopicCode[]
      })
    }
  }, [data, reset])

  const handleNext = async () => {
    const fieldsToValidate = {
      0: ['name', 'description'] as const,
      1: ['language', 'currentLevel', 'targetLevel', 'target'] as const,
      2: ['topics'] as const
    }[activeStep]

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const handleBack = () => setActiveStep((prev) => prev - 1)

  const onSubmit = async (formData: UpdateSpaceFormData) => {
    if (activeStep !== steps.length - 1) {
      handleNext()
      return
    }

    try {
      await mutate.mutateAsync({
        id: idSpace,
        data: {
          ...formData,
          topics: formData.topics.filter((topic): topic is TopicCode => topic !== undefined)
        }
      })
      toast.success('Space updated successfully')
      onClose()
    } catch (error) {
      toast.error('Failed to update space')
      console.error(error)
    }
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Box mb={3}>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Please update your learning space name
              </Typography>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    fullWidth
                    error={!!errors.name}
                    placeholder='E.g., English Communication Learning Space'
                    helperText={errors.name?.message}
                    variant='outlined'
                  />
                )}
              />
            </Box>

            <Box mb={3}>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Update your learning goals
              </Typography>
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <AppInput
                    {...field}
                    fullWidth
                    rows={4}
                    error={!!errors.description}
                    placeholder='E.g., I want to improve my communication skills...'
                    helperText={errors.description?.message}
                    variant='outlined'
                  />
                )}
              />
            </Box>
          </>
        )

      case 1:
        return (
          <Box display='flex' flexDirection='column' gap={3}>
            <Box>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Update your learning language
              </Typography>
              <Controller
                name='language'
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder='Select language'>
                    {Object.entries(LANGUAGE_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.language && (
                <Typography color='error' variant='caption' sx={{ mt: 1 }}>
                  {errors.language.message}
                </Typography>
              )}
            </Box>

            <Box>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Update your current level
              </Typography>
              <Controller
                name='currentLevel'
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder='Select your current level'>
                    {Object.entries(LEVEL_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.currentLevel && (
                <Typography color='error' variant='caption' sx={{ mt: 1 }}>
                  {errors.currentLevel.message}
                </Typography>
              )}
            </Box>

            <Box>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Update your target level
              </Typography>
              <Controller
                name='targetLevel'
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder='Select your target level'>
                    {Object.entries(LEVEL_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.targetLevel && (
                <Typography color='error' variant='caption' sx={{ mt: 1 }}>
                  {errors.targetLevel.message}
                </Typography>
              )}
            </Box>

            <Box>
              <Typography variant='body1' color='text.secondary' gutterBottom>
                Update your learning purpose
              </Typography>
              <Controller
                name='target'
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder='Select a learning purpose'>
                    {Object.entries(TARGET_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.target && (
                <Typography color='error' variant='caption' sx={{ mt: 1 }}>
                  {errors.target.message}
                </Typography>
              )}
            </Box>
          </Box>
        )

      case 2:
        return (
          <Box>
            <Typography variant='body1' color='text.secondary' gutterBottom>
              Update your topic of interest
            </Typography>
            <MultiSelect
              name='topics'
              control={control}
              placeholder='Please select a topic'
              options={Object.entries(TOPIC_LABELS).map(([value, label]) => ({
                value,
                label
              }))}
              error={errors.topics?.message}
              fullWidth
            />
          </Box>
        )

      default:
        return null
    }
  }

  if (isLoading) return <AppLoading />

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ width: 600, p: 2 }}>
      <Typography variant='h6' component='h2' gutterBottom>
        Update learning space
      </Typography>

      <Stepper activeStep={activeStep} sx={{ my: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <AppButton onClick={onClose} disabled={isSubmitting} variant='outlined' sx={{ mr: 1 }}>
            Cancel
          </AppButton>
        </Box>
        <Box>
          {activeStep > 0 && (
            <AppButton onClick={handleBack} disabled={isSubmitting} variant='outlined' sx={{ mr: 1 }}>
              Back
            </AppButton>
          )}
          <AppButton type='submit' variant='black' disabled={isSubmitting}>
            {activeStep === steps.length - 1 ? 'Update space' : 'Next'}
          </AppButton>
        </Box>
      </Box>
    </Box>
  )
}

export default UpdateSpaceModal
