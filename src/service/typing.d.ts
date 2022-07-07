/* eslint-disable no-unused-vars */
declare namespace API {
  type Response = {
    success: boolean
    errorCode: string
    // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    showType: 0 | 1 | 2 | 4 | 9
    errorMessage: string
    data: object | undefined | null
    count: number
  }

  type PageParams = {
    page: number
    pageSize: number
  }

  type Model = {
    createdAt: string
    updatedAt: string
    deletedAt: string
    createdBy: number
  }

  type Dict = {
    label: string
    description: string
    sort: number
  } & Model

  type Account = {
    area: string
    category: string
    platform: string
    accountName: string
    startTime: string
    endTime: string
  } & Model

  type User = {
    username: string
    userRating: string
    category: string
    area: string
    gender: string
    phone: string
    mail: string
  } & Model

  type AccountQuery = {
    accountId: number
    startTime: string
    endTime: string
  } & Model

  type UserQuery = {
    username: string
    userRating: string
    category: string
    area: string
  } & Model

  type CharsQuery = {
    accountId:number
    dateList:number
  } & Model


  type DictParams = Partial<Dict>
  type AccountParams = Partial<Account>
  type AccountQueryParams = Partial<AccountQuery>
  type UserParams = Partial<User>
  type UserQueryParams = Partial<UserQuery>

  type CharsParams = Partial<CharsQuery>
  type LoginRequest = {
    phone: string
    smsCode: string
  }
}
