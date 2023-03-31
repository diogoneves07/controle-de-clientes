export interface ClientAddress {
  CEP: number
  city?: string
  state?: string
  neighborhood: string
  street: string
  homeNumber: number
  details?: string
  isMain: boolean
}

export interface ClientData {
  name: string
  personType: 'Fisíca' | 'Juridíca'
  phoneNumber: string
  email: string
  addresses: ClientAddress[]
}
