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
  person: { type: 'Fisíca' | 'Juridíca'; id: string }
  phoneNumber: string
  email: string
  addresses: ClientAddress[]
}
