const printTeam = (teamName, coach, ...team) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    let players = 'Players: '
    team.forEach((player, index) => { players += (index == 0) ? `${player}`:`,${player}`})
    console.log(`Players: ${players}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = [...cities]
