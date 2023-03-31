import { clients, clientsBDRequest, clientStoreName } from './main'
import type { ClientData } from './schemas'

export type ClientDataWithID = ClientData & { id: number }

export function insertClientInDB(client: ClientData) {
  if (!clients.db) {
    clientsBDRequest.addEventListener('success', () => {
      insertClientInDB(client)
    })
    return
  }

  const transaction = clients.db.transaction(clientStoreName, 'readwrite')
  const clientsStore = transaction.objectStore(clientStoreName)

  console.log(client)
  clientsStore.add(client)
}

export function deleteClientFromDB(id: number) {
  if (!clients.db) {
    clientsBDRequest.addEventListener('success', () => {
      deleteClientFromDB(id)
    })
    return
  }

  const transaction = clients.db.transaction(clientStoreName, 'readwrite')
  const clientsStore = transaction.objectStore(clientStoreName)

  clientsStore.delete(id)
}

export function updateClientInDB(newClientData: ClientDataWithID) {
  if (!clients.db) {
    clientsBDRequest.addEventListener('success', () => {
      updateClientInDB(newClientData)
    })
    return
  }

  const transaction = clients.db.transaction(clientStoreName, 'readwrite')
  const clientsStore = transaction.objectStore(clientStoreName)

  clientsStore.put(newClientData)
}

export function getClientInDBByid(id: number) {
  const fn = (r: (client: ClientDataWithID) => void) => {
    const transaction = clientsBDRequest.result.transaction(clientStoreName, 'readonly')
    const clientsStore = transaction.objectStore(clientStoreName)
    const d = clientsStore.get(id)

    d.addEventListener('success', () => {
      r(d.result)
    })
  }

  return new Promise<ClientDataWithID>((r) => {
    if (clients.db) return fn(r)

    clientsBDRequest.addEventListener('success', () => {
      fn(r)
    })
  })
}

export function getAllClientsInDB() {
  const fn = (r: (clients: ClientDataWithID[]) => void) => {
    const transaction = clientsBDRequest.result.transaction(clientStoreName, 'readonly')
    const clients = transaction.objectStore(clientStoreName)
    const d = clients.getAll()

    d.addEventListener('success', () => {
      r(d.result)
    })
  }

  return new Promise<ClientDataWithID[]>((r) => {
    if (clients.db) return fn(r)

    clientsBDRequest.addEventListener('success', () => fn(r))
  })
}
