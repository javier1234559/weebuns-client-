// import Box from '@mui/material/Box'
// import Chip from '@mui/material/Chip'
// import Typography from '@mui/material/Typography'
// import { X } from 'lucide-react'
// import React from 'react'
// import { Control, Controller } from 'react-hook-form'

// import { AppButton } from '~/components/common/AppButton'
// import AppInput from '~/components/common/AppInput'
// import ContentEditor from '~/components/feature/Editor/ContentEditor'
// import ImageUpload from '~/components/feature/ImageUpload'
// import { Card, CardContent, CardTitle } from '~/components/ui/card'
// import { Select, SelectItem } from '~/components/ui/select'
// import { useEventSwitchDarkMode } from '~/hooks/event'

// export interface CreateEssayFormData {
//   title: string
//   content: string
//   featuredImage: File | null
//   language: string
//   hashtags: string[]
// }

// interface CreateEssayFormProps {
//   control: Control<CreateEssayFormData>
// }

// const CreateEssayForm: React.FC<CreateEssayFormProps> = ({ control }) => {
//   const { isDarkMode } = useEventSwitchDarkMode()
//   const [isShowUpload, setIsShowUpload] = React.useState(false)

//   return (
//     <Card>
//       <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <CardTitle>Write a new post</CardTitle>

//         <Box display='flex' gap={2}>
//           <Box flexGrow={1} flexShrink={1} flexBasis='auto'>
//             <Controller
//               name='title'
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <AppInput
//                   {...field}
//                   fullWidth
//                   error={!!error}
//                   placeholder='Write a title'
//                   helperText={error?.message}
//                   variant='outlined'
//                 />
//               )}
//             />
//           </Box>

//           <Box flexGrow={0} flexShrink={0} flexBasis='auto'>
//             <Controller
//               name='language'
//               control={control}
//               render={({ field }) => (
//                 <Select {...field} placeholder='Language'>
//                   <SelectItem value='en'>English</SelectItem>
//                   <SelectItem value='es'>Spanish</SelectItem>
//                 </Select>
//               )}
//             />
//           </Box>
//         </Box>

//         {/* <Box flexGrow={1} flexShrink={1} flexBasis='auto'>
//           <AppButton onClick={(_e) => setIsShowUpload((pre) => !pre)}>
//             {isShowUpload ? 'Hide Cover' : 'Add Cover'}
//           </AppButton>
//         </Box>
//         {isShowUpload && (
//           <Controller
//             name='featuredImage'
//             control={control}
//             render={({ field }) => <ImageUpload value={field.value} onChange={(file) => field.onChange(file)} />}
//           />
//         )} */}

//         <Controller
//           name='content'
//           control={control}
//           render={({ field }) => (
//             <ContentEditor isDark={isDarkMode} content={field.value} onChangeContent={field.onChange} />
//           )}
//         />

//         <Box my={2}>
//           <Controller
//             name='hashtags'
//             control={control}
//             render={({ field }) => (
//               <Box>
//                 <Typography variant='h6' mb={1}>
//                   Hashtags
//                 </Typography>
//                 {field.value.map((tag, index) => (
//                   <Chip
//                     key={index}
//                     label={tag}
//                     variant='outlined'
//                     deleteIcon={<X size={14} />}
//                     onDelete={() => {
//                       const newTags = [...field.value]
//                       newTags.splice(index, 1)
//                       field.onChange(newTags)
//                     }}
//                     sx={{ margin: 0.5 }}
//                   />
//                 ))}
//                 <AppInput
//                   fullWidth
//                   sx={{ marginTop: 2 }}
//                   placeholder='Add a hashtag'
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                       e.preventDefault()
//                       const input = e.target as HTMLInputElement
//                       if (input.value) {
//                         field.onChange([...field.value, input.value])
//                         input.value = ''
//                       }
//                     }
//                   }}
//                 />
//               </Box>
//             )}
//           />
//         </Box>
//       </CardContent>
//     </Card>
//   )
// }

// export default React.memo(CreateEssayForm)

import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { AppButton } from '~/components/common/AppButton'
import AppInput from '~/components/common/AppInput'
import ContentEditor from '~/components/feature/Editor/ContentEditor'
import UploadImage from '~/components/feature/ImageUpload'
import { Card, CardContent, CardTitle } from '~/components/ui/card'
import { Select, SelectItem } from '~/components/ui/select'
import { clearEssayData, setEssayData } from '~/features/essay/essaySlice'
import { useCreateEssay } from '~/features/essay/hooks/useEssayQueries'
import { useEventSwitchDarkMode } from '~/hooks/event'
import { RouteNames } from '~/router/route-name'
import { EssayStatus } from '~/services/api/api-axios'
import { RootState } from '~/store/store'
import { replacePathId } from '~/utils/replace-path'

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(10, 'Title must be at least 10 characters'),
  cover_url: yup.string().nullable(),
  content: yup.string().required('Content is required').min(100, 'Content must be at least 100 characters'),
  language: yup.string().required('Language is required'),
  hashtags: yup.array().of(yup.string()).required('Hashtag is required').defined().default([])
})

export type EssayFormData = yup.InferType<typeof schema>

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Vietnamese' }
]

const ESSAY_OPTIONS = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'draft', label: 'Draft' }
]

function CreateEssayForm() {
  const { isDarkMode } = useEventSwitchDarkMode()
  const [isShowUpload, setIsShowUpload] = React.useState(false)
  const [status, setStatus] = React.useState('public')

  const essayData = useSelector<RootState, EssayFormData>((state) => state.essay.essayFormData)
  const idSpace = useSelector<RootState>((state) => state.space.currentSpace?.id)
  const dispatch = useDispatch()
  const mutation = useCreateEssay()
  const navigator = useNavigate()

  const form = useForm<EssayFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...essayData,
      hashtags: essayData?.hashtags || []
    }
  })
  const { control, handleSubmit, watch } = form

  // Auto-save draft
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change') {
        // Only dispatch if it's a change event and we have a field name
        if (name) {
          dispatch(setEssayData({ [name]: value[name as keyof EssayFormData] }))
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, dispatch])

  const onSubmit = async (data: EssayFormData) => {
    const essayId = toast.loading('Create essay...')

    try {
      const result = await mutation.mutateAsync({
        title: data.title,
        content: data.content,
        cover_url: data.cover_url,
        language: data.language,
        hashtag_names: data.hashtags.filter((tag): tag is string => !!tag),
        status: status as EssayStatus,
        spaceId: idSpace as string
      })

      // Clear Redux store after successful submission
      dispatch(clearEssayData())
      toast.success('Essay published successfully', { id: essayId })

      if (result.id) navigator(replacePathId(RouteNames.EssayDetail, result.id))
    } catch (error) {
      console.error('Submission failed:', error)
      toast.error('Failed to publish essay', { id: essayId })
    }
  }

  const renderTitleAndLanguage = () => (
    <Box display='flex' gap={2}>
      <Box flexGrow={1}>
        <Controller
          name='title'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <AppInput {...field} fullWidth error={!!error} placeholder='Write a title' helperText={error?.message} />
          )}
        />
      </Box>
      <Box>
        <Controller
          name='language'
          control={control}
          render={({ field }) => (
            <Select {...field} placeholder='Select language'>
              {LANGUAGE_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </Box>
    </Box>
  )

  const renderImageUpload = () => (
    <>
      <AppButton variant='outlined' onClick={() => setIsShowUpload((prev) => !prev)}>
        {isShowUpload ? 'Hide Add Cover Image' : 'Add Cover Image (Optional)'}
      </AppButton>
      {isShowUpload && (
        <Controller
          name='cover_url'
          control={control}
          render={({ field }) => <UploadImage value={field.value ?? null} onChange={field.onChange} />}
        />
      )}
    </>
  )

  const renderContent = () => (
    <Controller
      name='content'
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <ContentEditor isDark={isDarkMode} content={field.value} onChangeContent={field.onChange} />
          {error && (
            <Typography color='error' variant='caption' sx={{ mt: 1 }}>
              {error.message}
            </Typography>
          )}
        </Box>
      )}
    />
  )

  const renderHashtags = () => (
    <Controller
      name='hashtags'
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <Box my={2}>
          <Typography variant='h6' mb={1}>
            Hashtags
          </Typography>
          {(field.value || []).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant='outlined'
              deleteIcon={<X size={14} />}
              onDelete={() => {
                const newTags = [...(field.value || [])]
                newTags.splice(index, 1)
                field.onChange(newTags)
              }}
              sx={{ margin: 0.5 }}
            />
          ))}
          <AppInput
            fullWidth
            sx={{ marginTop: 2 }}
            placeholder='Add a hashtag'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                const input = e.target as HTMLInputElement
                if (input.value) {
                  // Đảm bảo field.value luôn là array
                  const currentTags = Array.isArray(field.value) ? field.value : []
                  field.onChange([...currentTags, input.value])
                  input.value = ''
                }
              }
            }}
          />
        </Box>
      )}
    />
  )

  return (
    <form id='essay-create-form' onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <CardTitle>Create New Post</CardTitle>
          {renderTitleAndLanguage()}
          {renderImageUpload()}
          {renderContent()}
          {renderHashtags()}
          <Box display='flex' justifyContent='flex-end' gap={1}>
            <Box>
              <Select
                name={status}
                value={status}
                onChange={(e) => setStatus(e.target.value as EssayStatus)}
                placeholder='Select language'
              >
                {ESSAY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </Box>
            <AppButton type='submit' variant='contained' color='primary'>
              Publish
            </AppButton>
          </Box>
        </CardContent>
      </Card>
    </form>
  )
}

export default React.memo(CreateEssayForm)
