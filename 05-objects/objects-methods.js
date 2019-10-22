let restaurant = {
    name: 'ADB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        // console.log(this)
        console.log('checkAvailability for ' + partySize)
        let seatsAvailable = this.guestCapacity - this.guestCount
        return seatsAvailable >= partySize
    },
    // seatParty - takes the partySize to be seated and adds it to the guestCount
    seatParty: function(partySize) {
        console.log('seatparty of ' + partySize)
        this.guestCount += partySize
    },
    // removePart - takes the partySize thats leaving the restaurant and removes it from guestCount
    removeParty: function(partySize) {
        console.log('removeParty of ' + partySize)
        this.guestCount -= partySize 
    }
}

let status = restaurant.checkAvailability(5)
console.log('Check the availability: ' + status)

restaurant.seatParty(72)
console.log('Check the availability: ' + restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log('Check the availability: ' + restaurant.checkAvailability(4))

