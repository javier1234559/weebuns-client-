/* eslint-disable */
/*
 * ----------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-ES            ##
 * ## SOURCE: https://github.com/hunghg255/swagger-typescript-api-es   ##
 * ----------------------------------------------------------------------
 */

export type DeleteResponseDto = object

export interface UnitContent {
  id: string
  unitId: string
  title: string
  contentType: string
  content: object
  /** @format int32 */
  orderIndex: number
  isPremium: boolean
  isRequired: boolean
  /** @format int32 */
  completeWeight: number
  isDone: boolean
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  unit?: Unit
}

export interface SpaceCount {
  /** @example 0 */
  essays: number
  /** @example 0 */
  notes: number
  /** @example 0 */
  vocabularies: number
}

export interface Space {
  /** @example "123e4567-e89b-12d3-a456-426614174000" */
  id: string
  /** @example "English Learning Space" */
  name: string
  /** @example "A space for learning English" */
  description: string | null
  /**
   * Learning language
   * @example "ENGLISH"
   */
  language: 'ENGLISH' | 'VIETNAMESE'
  /**
   * Learning target/purpose
   * @example "COMMUNICATION"
   */
  target: 'COMMUNICATION' | 'IELTS' | 'TOEIC' | 'OTHER'
  /**
   * Current proficiency level
   * @example "INTERMEDIATE"
   */
  currentLevel: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
  /**
   * Main learning topic
   * @example "BUSINESS"
   */
  topic: 'BUSINESS' | 'ACADEMIC' | 'TRAVEL' | 'DAILY_LIFE' | 'TECHNOLOGY' | 'OTHER'
  /**
   * Target proficiency level to achieve
   * @example "ADVANCED"
   */
  targetLevel: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
  /**
   * ID of the user who created this space
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  createdBy: string
  /**
   * Creation timestamp
   * @format date-time
   */
  createdAt: string
  /**
   * Last update timestamp
   * @format date-time
   */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  /**
   * Count of related entities
   * @example {"essays":0,"notes":0,"vocabularies":0}
   */
  _count: SpaceCount
  /** Creator user details */
  creator: User | null
}

export interface Note {
  id: string
  spaceId: string | null
  unitId: string
  title: string
  content: string
  /** @example ["grammar","important","review","vocabulary"] */
  tags: object
  isBookmarked: boolean
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string | null
  unit?: Unit
  creator?: User
  space?: Space | null
}

export interface Unit {
  id: string
  courseId: string
  title: string
  description: string | null
  /** @format int32 */
  orderIndex: number
  /** @example "[{" */
  comments: object
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  course?: Course
  contents?: UnitContent[]
  notes?: Note[]
  currentInCourses?: Course[]
}

export interface UserCourse {
  id: string
  userId: string
  courseId: string
  /** @format int32 */
  completedWeight: number
  paymentId: string | null
  paymentStatus: string | null
  /** @format double */
  purchasePrice: number | null
  /** @format date-time */
  purchasedAt: string
  user?: User
  course?: Course
}

export interface SpaceCourse {
  id: string
  spaceId: string
  courseId: string
  /** @format date-time */
  joinedAt: string
  space?: Space
  course?: Course
}

export interface Course {
  id: string
  currentUnitId: string | null
  title: string
  description: string | null
  thumbnailUrl: string | null
  level: string
  /** @format double */
  price: number | null
  /** @format int32 */
  totalWeight: number
  isPublished: boolean
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  currentUnit?: Unit | null
  creator?: User
  units?: Unit[]
  userCourses?: UserCourse[]
  spaces?: SpaceCourse[]
}

export interface Vocabulary {
  id: string
  spaceId: string
  term: string
  meaning: string
  exampleSentence: string | null
  imageUrl: string | null
  referenceLink: string | null
  referenceName: string | null
  /** @example ["business","common","idiom","phrasal-verb"] */
  tags: object
  /** @format int32 */
  repetitionLevel: number
  /** @format date-time */
  nextReview: string | null
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  space?: Space
  creator?: User
}

export interface CorrectionSentence {
  /** @example "uuid" */
  id: string
  /** @example "uuid" */
  correctionId: string
  /** @example 0 */
  index: number
  /** @example "original text" */
  originalText: string
  /** @example "corrected text" */
  correctedText: string
  /** @example "explanation" */
  explanation: string
  /** @example true */
  isCorrect: boolean
  /** @example 4.5 */
  rating: number
  /**
   * @format date-time
   * @example "2024-11-15T14:24:17.624Z"
   */
  createdAt: string
  /**
   * @format date-time
   * @example "2024-11-15T14:24:17.624Z"
   */
  updatedAt: string
}

export interface CorrectionReply {
  /** @example 1 */
  id: string
  /**
   * ID of the related correction
   * @example 1
   */
  correctionId: string
  /**
   * Reply comment to the correction
   * @example "Great improvement on your grammar!"
   */
  comment: string
  /**
   * User ID who created the reply
   * @example 1
   */
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  creator: User | null
}

export interface Correction {
  /** @example 1 */
  id: string
  /**
   * ID of the essay being corrected
   * @example 1
   */
  essayId: string
  /**
   * Overall feedback for the essay
   * @example "Good structure but needs work on tenses"
   */
  overallComment: string | null
  /**
   * Rating score for the essay
   * @min 0
   * @max 10
   * @example "8.0"
   */
  rating: number | null
  /**
   * User ID who created the correction
   * @example 1
   */
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  essay: Essay | null
  creator: User | null
  sentences: CorrectionSentence[] | null
  replies: CorrectionReply[] | null
}

export interface HashtagCount {
  /** @example 5 */
  essays: number
}

export interface Hashtag {
  /** @example 1 */
  id: string
  /** @example "grammar" */
  name: string
  /** @example 10 */
  usageCount: number
  /**
   * @format date-time
   * @example "2024-01-01T00:00:00Z"
   */
  createdAt: string
  /**
   * @format date-time
   * @example "2024-01-01T00:00:00Z"
   */
  updatedAt: string
  essays: EssayHashtag[] | null
  _count: HashtagCount | null
}

export interface EssayHashtag {
  /**
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id: string
  /**
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  essayId: string
  /**
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  hashtagId: string
  /**
   * @format date-time
   * @example "2024-01-01T00:00:00.000Z"
   */
  createdAt: string
  essay?: Essay | null
  hashtag?: Hashtag | null
}

export interface Essay {
  /** @example 1 */
  id: string
  /** @example 1 */
  spaceId: string
  /** @example "My First Essay" */
  title: string
  /** @example "A brief summary" */
  summary: string | null
  /** @example "Essay content..." */
  content: string
  /** @example 0 */
  upvoteCount: number
  /** @example "https://example.com/cover.jpg" */
  coverUrl: string | null
  /** @example "draft" */
  status: 'draft' | 'public' | 'private' | 'deleted'
  /** @example "en" */
  language: string
  /** @example 1 */
  createdBy: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  space: Space | null
  author: User | null
  corrections: Correction[] | null
  /** Associated hashtags for this essay */
  hashtags: EssayHashtag[] | null
}

export interface User {
  /** @example "00321d6f-2bcf-4985-9659-92a571275da6" */
  id: string
  /** @example "johndoe" */
  username: string
  /** @example "john@example.com" */
  email: string
  passwordHash: string | null
  /** @example "user" */
  role: 'user' | 'admin' | 'teacher'
  /** @example "local" */
  authProvider: 'local' | 'google' | 'facebook'
  authProviderId: string | null
  /** @example "John" */
  firstName: string | null
  /** @example "Doe" */
  lastName: string | null
  /** @example "https://example.com/avatar.jpg" */
  profilePicture: string | null
  /** @example false */
  isEmailVerified: boolean
  /**
   * User's native language
   * @example "VIETNAMESE"
   */
  nativeLanguage: 'ENGLISH' | 'VIETNAMESE'
  /** @format date-time */
  lastLogin: string | null
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt: string
  courses: Course[] | null
  user_courses: UserCourse[] | null
  notes: Note[] | null
  vocabularies: Vocabulary[] | null
  spaces: Space[] | null
  essays: Essay[] | null
  corrections: Correction[] | null
  correction_replies: CorrectionReply[] | null
}

export interface PaginationOutputDto {
  /**
   * Total number of items
   * @example 100
   */
  totalItems: number
  /**
   * Current page number
   * @example 1
   */
  currentPage: number
  /**
   * Total number of pages
   * @example 10
   */
  totalPages: number
  /**
   * Number of items per page
   * @example 10
   */
  itemsPerPage: number
  /**
   * Indicates if there is a next page
   * @example true
   */
  hasNextPage: boolean
  /**
   * Indicates if there is a previous page
   * @example false
   */
  hasPreviousPage: boolean
}

export interface UsersResponse {
  users: User[]
  pagination: PaginationOutputDto
}

export interface UserResponse {
  user: User
}

export interface CreateUserDto {
  last_name: string
  first_name: string
  username: string
  email: string
  password: string
  nativeLanguage: string
  profile_picture: string
  role: 'user' | 'admin' | 'teacher'
  auth_provider: 'local' | 'google' | 'facebook'
}

export interface CreateUserResponse {
  user: User
}

export interface UpdateUserDto {
  last_name?: string
  first_name?: string
  username?: string
  email?: string
  nativeLanguage?: string
  profile_picture?: string
  role?: 'user' | 'admin' | 'teacher'
  auth_provider?: 'local' | 'google' | 'facebook'
}

export interface UpdateUserResponse {
  user: User
}

export interface DeleteUserResponse {
  user: User
}

export interface RegisterDto {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  nativeLanguage: string
}

export interface UserRegisterResponse {
  access_token: string
  user: User
}

export interface LoginDto {
  email: string
  password: string
}

export interface UserLoginResponse {
  access_token: string
  user: User
}

export interface LoginGoogleDto {
  accessToken: string
}

export interface LoginFacebookDto {
  accessToken: string
}

export interface UserRefreshTokenResponse {
  access_token: string
  refresh_token: string
}

export interface LogoutResponse {
  message: string
}

export interface SpacesResponse {
  data: Space[]
  pagination: PaginationOutputDto
}

export interface FindOneSpaceResponseDto {
  space: Space
}

export interface CreateSpaceDto {
  name: string
  description: string
  /** @example "ENGLISH" */
  language: 'ENGLISH' | 'VIETNAMESE'
  /** @example "COMMUNICATION" */
  target: 'COMMUNICATION' | 'IELTS' | 'TOEIC' | 'OTHER'
  /**
   * Current proficiency level
   * @example "INTERMEDIATE"
   */
  currentLevel: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
  /**
   * Main learning topic
   * @example "BUSINESS"
   */
  topic: 'BUSINESS' | 'ACADEMIC' | 'TRAVEL' | 'DAILY_LIFE' | 'TECHNOLOGY' | 'OTHER'
  /**
   * Target proficiency level to achieve
   * @example "ADVANCED"
   */
  targetLevel: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
}

export interface UpdateSpaceDto {
  name?: string
  description?: string
  /** @example "ENGLISH" */
  language?: 'ENGLISH' | 'VIETNAMESE'
  /** @example "COMMUNICATION" */
  target?: 'COMMUNICATION' | 'IELTS' | 'TOEIC' | 'OTHER'
  /**
   * Current proficiency level
   * @example "INTERMEDIATE"
   */
  currentLevel?: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
  /**
   * Main learning topic
   * @example "BUSINESS"
   */
  topic?: 'BUSINESS' | 'ACADEMIC' | 'TRAVEL' | 'DAILY_LIFE' | 'TECHNOLOGY' | 'OTHER'
  /**
   * Target proficiency level to achieve
   * @example "ADVANCED"
   */
  targetLevel?: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
}

export interface DeleteSpaceResponseDto {
  space: Space
}

export interface CourseCreatorDto {
  id: string
  username: string
  profilePicture: string | null
}

export interface SpaceCourseDto {
  id: string
  title: string
  description: string | null
  thumbnailUrl: string | null
  level: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'UPPER_INTERMEDIATE' | 'ADVANCED' | 'MASTER'
  price: number | null
  totalWeight: number
  isPublished: boolean
  createdAt: string
  creator: CourseCreatorDto
  is_joined: boolean
  joined_at: string | null
}

export interface PaginationDto {
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface SpaceCoursesResponseDto {
  data: SpaceCourseDto[]
  pagination: PaginationDto
}

export interface EssaysResponse {
  data: Essay[]
  pagination: PaginationOutputDto
}

export interface FindOneEssayResponseDto {
  essay: Essay
}

export enum EssayStatus {
  Draft = 'draft',
  Public = 'public',
  Private = 'private',
  Deleted = 'deleted'
}

export interface CreateEssayDto {
  /** @example "My Journey Learning English" */
  title: string
  summary?: string | null
  /** @example "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." */
  content: string
  /**
   * @pattern ^https?://
   * @example "https://example.com/images/cover-123.jpg"
   */
  cover_url?: string | null
  /** @example "public" */
  status: EssayStatus
  /**
   * @minLength 2
   * @maxLength 5
   * @example "en"
   */
  language: string
  /** @example "123e4567-e89b-12d3-a456-426614174000" */
  spaceId: string
  /** @example ["english","travel"] */
  hashtag_names?: string[]
}

export interface CreateEssayResponseDto {
  /** @example "123e4567-e89b-12d3-a456-426614174000" */
  id?: string
  /** @example "123e4567-e89b-12d3-a456-426614174000" */
  id_space?: string
  /** @example "Updated: My Journey Learning English" */
  title?: string
  /** @example "Updated summary of my language learning experience" */
  summary?: string | null
  /**
   * @minLength 1
   * @example "Updated content: Lorem ipsum dolor sit amet..."
   */
  content?: string
  /**
   * @min 0
   * @example 42
   */
  upvote_count?: number
  /**
   * @pattern ^https?://
   * @example "https://example.com/images/updated-cover-123.jpg"
   */
  cover_url?: string | null
  /** @example "public" */
  status?: string
  /**
   * @minLength 2
   * @maxLength 5
   * @example "en"
   */
  language?: string
  /** Author */
  author?: User
  hashtags?: any[][]
}

export interface UpdateEssayDto {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Updated: My Journey Learning English"
   */
  title?: string
  /** @example "Updated summary of my language learning experience" */
  summary?: string | null
  /**
   * @minLength 1
   * @example "Updated content: Lorem ipsum dolor sit amet..."
   */
  content?: string
  /**
   * @min 0
   * @example 42
   */
  upvote_count?: number
  /**
   * @pattern ^https?://
   * @example "https://example.com/images/updated-cover-123.jpg"
   */
  cover_url?: string | null
  /** @example "public" */
  status?: EssayStatus
  /**
   * @minLength 2
   * @maxLength 5
   * @example "en"
   */
  language?: string
  hashtag_names?: any[][]
}

export interface UpdateEssayResponseDto {
  essay: Essay
}

export interface DeleteEssayResponseDto {
  essay: Essay
}

export interface CreateVocabularyDto {
  spaceId: string
  term: string
  meaning: string
  exampleSentence?: string | null
  imageUrl?: string | null
  referenceLink?: string | null
  referenceName?: string | null
  /** @format date-time */
  nextReview?: string | null
}

export interface FindOneVocabularyResponseDto {
  vocabulary: Vocabulary
}

export interface FindAllVocabularyDto {
  /** @default 1 */
  page?: number
  /** @default 10 */
  perPage?: number
  search?: string
}

export interface UpdateVocabularyDto {
  spaceId?: string
  term?: string
  meaning?: string
  exampleSentence?: string | null
  imageUrl?: string | null
  referenceLink?: string | null
  referenceName?: string | null
  /** @format date-time */
  nextReview?: string | null
}

export interface HashtagsResponseDto {
  data: Hashtag[]
  pagination: PaginationOutputDto
}

export interface DeleteHashtagResponseDto {
  hashtag: Hashtag
}

export interface DailyActivityDto {
  /** @example "2024-03-15" */
  date: string
  /** @example 2 */
  level: number
  /** @example 5 */
  streak: number
}

export interface ActivityStreakResponseDto {
  activities: DailyActivityDto[]
  currentStreak: DailyActivityDto
}

export interface UserOverviewDto {
  /** @example 10 */
  essayCount: number
  /** @example 20 */
  vocabCount: number
  /** @example 5 */
  courseJoinedCount: number
  /** @example 15 */
  notesCount: number
}

export interface TranslateDto {
  /** @example "Hello world" */
  text: string
  /** @example "English" */
  sourceLanguage: string
  /** @example "Spanish" */
  targetLanguage: string
}

export interface TranslateResponseDto {
  /** @example "Hello world" */
  original_text: string
  /** @example "Hola mundo" */
  translated_text: string
  /** @example "English" */
  source_language: string
  /** @example "Spanish" */
  target_language: string
}

export interface CheckGrammarDto {
  /** @example "This is a sample text with grammer mistakes." */
  text: string
}

export interface PositionDto {
  /** @example 0 */
  start: number
  /** @example 5 */
  end: number
}

export interface CorrectionDto {
  /** @example "grammer" */
  original: string
  /** @example "grammar" */
  corrected: string
  explanation: string
  /** @example "spelling" */
  type: 'grammar' | 'spelling' | 'punctuation' | 'style'
  position: PositionDto
}

export interface CheckGrammarResponseDto {
  corrections: CorrectionDto[]
  /** @example "Found 2 spelling errors and 1 grammar mistake." */
  summary: string
  /**
   * @min 0
   * @max 100
   * @example 85
   */
  overall_score: number
}

export interface RecommendTopicsResponseDto {
  topics: string[]
  category: string
  count: number
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType

  instance?: AxiosInstance
  injectHeaders?: (data: any) => any
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType
  private injectHeaders?: (data: any) => any

  constructor({
    securityWorker,
    secure,
    format,
    instance,
    injectHeaders,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = instance ?? axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
    this.injectHeaders = injectHeaders
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T, _E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body)
    }

    let headers = {
      ...(requestParams.headers || {}),
      ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
    }

    if (this.injectHeaders) {
      headers = await this.injectHeaders(headers)
    }

    return this.instance.request({
      ...requestParams,
      headers,
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    })
  }
}

/**
 * @title Weebuns lms api
 * @version 1.0
 * @contact
 *
 * This docs includes all the endpoints of the weebuns lms api
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerUploadFile
     * @request POST:/api/uploads
     */
    uploadControllerUploadFile: (
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<DeleteResponseDto, any>({
        path: `/api/uploads`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerUploadMany
     * @request POST:/api/uploads/many
     */
    uploadControllerUploadMany: (
      data: {
        files: File[]
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          key?: string
          url?: string
          name?: string
          size?: number
        }[],
        any
      >({
        path: `/api/uploads/many`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerUploadVideo
     * @request POST:/api/uploads/video
     */
    uploadControllerUploadVideo: (
      data: {
        /** @format binary */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<DeleteResponseDto, any>({
        path: `/api/uploads/video`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerDeleteFile
     * @request DELETE:/api/uploads/{key}
     */
    uploadControllerDeleteFile: (key: string, params: RequestParams = {}) =>
      this.request<DeleteResponseDto, any>({
        path: `/api/uploads/${key}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindAll
     * @request GET:/api/users
     * @secure
     */
    userControllerFindAll: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersResponse, any>({
        path: `/api/users`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreate
     * @request POST:/api/users
     * @secure
     */
    userControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<CreateUserResponse, any>({
        path: `/api/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindOne
     * @request GET:/api/users/{id}
     * @secure
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/api/users/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdate
     * @request PUT:/api/users/{id}
     * @secure
     */
    userControllerUpdate: (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UpdateUserResponse, any>({
        path: `/api/users/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerRemove
     * @request DELETE:/api/users/{id}
     * @secure
     */
    userControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<DeleteUserResponse, any>({
        path: `/api/users/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerMe
     * @summary Get current user profile
     * @request GET:/api/auth/me
     */
    authControllerMe: (params: RequestParams = {}) =>
      this.request<UserResponse, void>({
        path: `/api/auth/me`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerRegister
     * @summary Register new user
     * @request POST:/api/auth/register
     */
    authControllerRegister: (data: RegisterDto, params: RequestParams = {}) =>
      this.request<UserRegisterResponse, void>({
        path: `/api/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @summary Login with email and password
     * @request POST:/api/auth/login
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<UserLoginResponse, void>({
        path: `/api/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLoginWithGoogle
     * @summary Login with Google
     * @request POST:/api/auth/login/google
     */
    authControllerLoginWithGoogle: (data: LoginGoogleDto, params: RequestParams = {}) =>
      this.request<UserLoginResponse, void>({
        path: `/api/auth/login/google`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLoginWithFacebook
     * @summary Login with Facebook
     * @request POST:/api/auth/login/facebook
     */
    authControllerLoginWithFacebook: (data: LoginFacebookDto, params: RequestParams = {}) =>
      this.request<UserLoginResponse, void>({
        path: `/api/auth/login/facebook`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerRefreshToken
     * @summary Refresh access token
     * @request POST:/api/auth/refresh-token
     */
    authControllerRefreshToken: (params: RequestParams = {}) =>
      this.request<UserRefreshTokenResponse, void>({
        path: `/api/auth/refresh-token`,
        method: 'POST',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogout
     * @summary Logout user
     * @request POST:/api/auth/logout
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<LogoutResponse, any>({
        path: `/api/auth/logout`,
        method: 'POST',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerFindAll
     * @request GET:/api/spaces
     */
    spaceControllerFindAll: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<SpacesResponse, any>({
        path: `/api/spaces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerCreate
     * @request POST:/api/spaces
     */
    spaceControllerCreate: (data: CreateSpaceDto, params: RequestParams = {}) =>
      this.request<FindOneSpaceResponseDto, any>({
        path: `/api/spaces`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerGetUserSpaces
     * @request GET:/api/spaces/user
     */
    spaceControllerGetUserSpaces: (
      query?: {
        /** @example 1 */
        page?: number
        /** @example 10 */
        perPage?: number
        /** @example "search term" */
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<SpacesResponse, any>({
        path: `/api/spaces/user`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerFindOne
     * @request GET:/api/spaces/{id}
     */
    spaceControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<FindOneSpaceResponseDto, any>({
        path: `/api/spaces/${id}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerUpdate
     * @request PATCH:/api/spaces/{id}
     */
    spaceControllerUpdate: (id: string, data: UpdateSpaceDto, params: RequestParams = {}) =>
      this.request<FindOneSpaceResponseDto, any>({
        path: `/api/spaces/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerDelete
     * @request DELETE:/api/spaces/{id}
     */
    spaceControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<DeleteSpaceResponseDto, any>({
        path: `/api/spaces/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags spaces
     * @name SpaceControllerGetSpaceCourses
     * @request GET:/api/spaces/{id}/courses
     */
    spaceControllerGetSpaceCourses: (
      id: string,
      query: {
        page: number
        perPage: number
      },
      params: RequestParams = {}
    ) =>
      this.request<SpaceCoursesResponseDto, any>({
        path: `/api/spaces/${id}/courses`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerFindAll
     * @request GET:/api/essays
     */
    essayControllerFindAll: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
        /** @example "public" */
        status?: 'draft' | 'public' | 'private' | 'deleted'
      },
      params: RequestParams = {}
    ) =>
      this.request<EssaysResponse, any>({
        path: `/api/essays`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerCreate
     * @request POST:/api/essays
     */
    essayControllerCreate: (data: CreateEssayDto, params: RequestParams = {}) =>
      this.request<CreateEssayResponseDto, any>({
        path: `/api/essays`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerFindAllByUser
     * @request GET:/api/essays/user
     */
    essayControllerFindAllByUser: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
        /** @example "public" */
        status?: 'draft' | 'public' | 'private' | 'deleted'
      },
      params: RequestParams = {}
    ) =>
      this.request<EssaysResponse, any>({
        path: `/api/essays/user`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerFindOne
     * @request GET:/api/essays/{id}
     */
    essayControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<FindOneEssayResponseDto, any>({
        path: `/api/essays/${id}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerUpdate
     * @request PATCH:/api/essays/{id}
     */
    essayControllerUpdate: (id: string, data: UpdateEssayDto, params: RequestParams = {}) =>
      this.request<UpdateEssayResponseDto, any>({
        path: `/api/essays/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerDelete
     * @request DELETE:/api/essays/{id}
     */
    essayControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<DeleteEssayResponseDto, any>({
        path: `/api/essays/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags essays
     * @name EssayControllerDeleteByUser
     * @request DELETE:/api/essays/{id}/user
     */
    essayControllerDeleteByUser: (id: string, params: RequestParams = {}) =>
      this.request<DeleteEssayResponseDto, any>({
        path: `/api/essays/${id}/user`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags vocabularies
     * @name VocabularyControllerCreate
     * @request POST:/api/vocabularies
     */
    vocabularyControllerCreate: (data: CreateVocabularyDto, params: RequestParams = {}) =>
      this.request<FindOneVocabularyResponseDto, any>({
        path: `/api/vocabularies`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags vocabularies
     * @name VocabularyControllerFindAll
     * @request GET:/api/vocabularies
     */
    vocabularyControllerFindAll: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<FindAllVocabularyDto, any>({
        path: `/api/vocabularies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags vocabularies
     * @name VocabularyControllerFindOne
     * @request GET:/api/vocabularies/{id}
     */
    vocabularyControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<FindOneVocabularyResponseDto, any>({
        path: `/api/vocabularies/${id}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags vocabularies
     * @name VocabularyControllerUpdate
     * @request PATCH:/api/vocabularies/{id}
     */
    vocabularyControllerUpdate: (id: string, data: UpdateVocabularyDto, params: RequestParams = {}) =>
      this.request<FindOneVocabularyResponseDto, any>({
        path: `/api/vocabularies/${id}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags vocabularies
     * @name VocabularyControllerDelete
     * @request DELETE:/api/vocabularies/{id}
     */
    vocabularyControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<FindOneVocabularyResponseDto, any>({
        path: `/api/vocabularies/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags health
     * @name HealthControllerCheck
     * @request GET:/api/health
     */
    healthControllerCheck: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
          /** @example {} */
          error?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
        },
        {
          /** @example "error" */
          status?: string
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string
              [key: string]: any
            }
          >
        }
      >({
        path: `/api/health`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags hashtags
     * @name HashtagControllerFindAll
     * @request GET:/api/hashtags
     */
    hashtagControllerFindAll: (
      query?: {
        /** @default 1 */
        page?: number
        /** @default 10 */
        perPage?: number
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<HashtagsResponseDto, any>({
        path: `/api/hashtags`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags hashtags
     * @name HashtagControllerDeleteByName
     * @request DELETE:/api/hashtags/{name}
     */
    hashtagControllerDeleteByName: (name: string, params: RequestParams = {}) =>
      this.request<DeleteHashtagResponseDto, any>({
        path: `/api/hashtags/${name}`,
        method: 'DELETE',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags stats
     * @name StatsControllerGetUserActivityStreak
     * @request GET:/api/stats/user/activity-streak
     */
    statsControllerGetUserActivityStreak: (
      query?: {
        /** @example "2024-01-01" */
        startDate?: string
        /** @example "2024-12-31" */
        endDate?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<ActivityStreakResponseDto, any>({
        path: `/api/stats/user/activity-streak`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags stats
     * @name StatsControllerGetUserOverview
     * @request GET:/api/stats/user/overview
     */
    statsControllerGetUserOverview: (params: RequestParams = {}) =>
      this.request<UserOverviewDto, any>({
        path: `/api/stats/user/overview`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ai
     * @name AiControllerTranslate
     * @request POST:/api/ai/translate
     */
    aiControllerTranslate: (data: TranslateDto, params: RequestParams = {}) =>
      this.request<TranslateResponseDto, any>({
        path: `/api/ai/translate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ai
     * @name AiControllerCheckGrammar
     * @request POST:/api/ai/check-grammar
     */
    aiControllerCheckGrammar: (data: CheckGrammarDto, params: RequestParams = {}) =>
      this.request<CheckGrammarResponseDto, any>({
        path: `/api/ai/check-grammar`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ai
     * @name AiControllerRecommendTopics
     * @request GET:/api/ai/recommend-topics
     */
    aiControllerRecommendTopics: (
      query?: {
        category?: string
        /** @default 5 */
        count?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<RecommendTopicsResponseDto, any>({
        path: `/api/ai/recommend-topics`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      })
  }
}
