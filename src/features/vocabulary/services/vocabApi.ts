import { CreateVocabularyDto, UpdateVocabularyDto } from '~/services/api/api-axios'
import api from '~/services/api/axiosInstance'
import { handleApiError } from '~/utils/handle-api-error'

const vocabularyApi = {
  create(form: CreateVocabularyDto) {
    return api
      .vocabularyControllerCreate(form)
      .then((res) => res.data)
      .catch((err) => {
        handleApiError(err)
        throw err.response.data
      })
  },
  getAll(query?: { page?: number; perPage?: number; search?: string; spaceId?: string }) {
    return api
      .vocabularyControllerFindAll(query)
      .then((res) => res.data)
      .catch((err) => {
        handleApiError(err)
        throw err.response.data
      })
  },
  getById(id: string) {
    return api
      .vocabularyControllerFindOne(id)
      .then((res) => res.data)
      .catch((err) => {
        handleApiError(err)
        throw err.response.data
      })
  },
  update(id: string, form: UpdateVocabularyDto) {
    return api
      .vocabularyControllerUpdate(id, form)
      .then((res) => res.data)
      .catch((err) => {
        handleApiError(err)
        throw err.response.data
      })
  },
  delete(id: string) {
    return api
      .vocabularyControllerDelete(id)
      .then(() => void 0)
      .catch((err) => {
        handleApiError(err)
        throw err.response.data
      })
  }
}

export default vocabularyApi
