import { useEffect, useState } from "react"

export const API_URL = process.env.GATSBY_API_URL

const useProfiles = () => {
  const [name, setName] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("unemployed")
  const [people, updatePeople] = useState([])
  const [profiles, updateProfiles] = useState([])

  useEffect(() => {
    fetch(`${API_URL}api/profiles`)
      .then(response => response.json())
      .then(data => {
        updatePeople(data)
        return data
      })
      .then(people => {
        if (people.length > 0) {
          const filteredPeople = people.filter(profile => {
            switch (employmentStatus) {
              case "employed":
                return profile.employed
              case "unemployed":
                return !profile.employed
              default:
                return profile
            }
          })

          updateProfiles(filteredPeople)
        }
      })
  }, [])

  useEffect(() => {
    let filteredResults = []

    if (name.length < 3) {
      filteredResults = people.filter(profile => {
        switch (employmentStatus) {
          case "employed":
            return profile.employed
          case "unemployed":
            return !profile.employed
          default:
            return profile
        }
      })
    } else {
      const criteria = name.toLowerCase().trim()

      filteredResults = people.filter(profile => {
        const filteredProfile =
          `${profile.firstName} ${profile.lastName}`
            .toLowerCase()
            .trim()
            .includes(criteria) ||
          profile.skills.join(" ").toLowerCase().trim().includes(criteria)

        switch (employmentStatus) {
          case "employed":
            return profile.employed && filteredProfile
          case "unemployed":
            return !profile.employed && filteredProfile
          default:
            return filteredProfile
        }
      })
    }

    updateProfiles(filteredResults)
  }, [name, employmentStatus])

  return [employmentStatus, setEmploymentStatus, name, setName, profiles]
}

export default useProfiles
