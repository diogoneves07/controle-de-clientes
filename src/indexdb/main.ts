export const clientsBDRequest = indexedDB.open('clients', 1)

export const clientStoreName = 'client'

export const clients: { db: typeof clientsBDRequest.result | undefined } = { db: undefined }

clientsBDRequest.addEventListener('upgradeneeded', () => {
  clients.db = clientsBDRequest.result
  if (!clients.db.objectStoreNames.contains(clientStoreName)) {
    clients.db.createObjectStore(clientStoreName, { keyPath: 'id', autoIncrement: true })
  }
})

clientsBDRequest.addEventListener('success', () => {
  clients.db = clientsBDRequest.result
})
