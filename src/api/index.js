const PERSONS_API = 'https://cdnapi.smotrim.ru/api/v1/boxes/vesti2'
const PERSONS_API_URL = 'https://cdnapi.smotrim.ru/api/v1/persons/'

export const getPersonsIds = async () => {
  const response = await fetch(PERSONS_API)
  const json = await response.json()

  const result = json.data.content
    .find(({ template }) => template === 'persons')
    .content.map(({ id, picId, title }) => ({
      id,
      picId,
      title
    }))

  return result
}

export const getImageUrl = async (id) => {
  const response = await fetch(`https://api.smotrim.ru/api/v1/pictures/${id}/bq/redirect`)

  return response.url
}

export const getPersonDescription = async (id) => {
  const response = await fetch(PERSONS_API_URL + id)
  const { anons, body } = (await response.json()).data

  return { anons, body }
}

export const getPersonsInfo = async () => {
  const personsIds = await getPersonsIds()
  if (!personsIds) return []

  const requests = personsIds.map(async (person) => {
    const { anons, body } = await getPersonDescription(person?.id)
    const imageUrl = await getImageUrl(person?.picId)
    return { ...person, anons, body, imageUrl }
  })

  const result = await Promise.all(requests)

  return result
}
