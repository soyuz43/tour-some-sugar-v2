// database.js
const database = {


venues : [
    { id: 1,  name: "The Cellar Moss",         address: "123 Vine Street",          squareFootage: 1500, maximumOccupancy: 100 },
    { id: 2,  name: "The Underground",         address: "456 Elm Avenue",           squareFootage: 1200, maximumOccupancy: 80  },
    { id: 3,  name: "The Loft",                address: "789 Oak Lane",             squareFootage: 1000, maximumOccupancy: 70  },
    { id: 4,  name: "The Rooftop Lounge",      address: "1010 Main Street",         squareFootage: 2000, maximumOccupancy: 120 },
    { id: 5,  name: "The Garden Pavilion",     address: "1313 Maple Drive",         squareFootage: 1800, maximumOccupancy: 110 },
    { id: 6,  name: "The Cozy Corner",         address: "1515 Pine Road",           squareFootage: 900,  maximumOccupancy: 60  },
    { id: 7,  name: "The Lakeside Retreat",    address: "1717 Lakeview Avenue",     squareFootage: 2200, maximumOccupancy: 130 },
    { id: 8,  name: "The Urban Lounge",        address: "1919 Broadway Street",     squareFootage: 1600, maximumOccupancy: 90  }
  ],
  
  
bands : [
  { id: 1, name: "Rocket Pumpkins",   numberOfMembers: 4,  musicalGenre: "Rock",      yearFormed: 2019,},
  { id: 2, name: "Electric Waves",    numberOfMembers: 3,  musicalGenre: "Pop",       yearFormed: 2020,},
  { id: 3, name: "Funky Fusion",      numberOfMembers: 5,  musicalGenre: "Funk",      yearFormed: 2018,},
  { id: 4, name: "Metallic Thunder",  numberOfMembers: 4,  musicalGenre: "Metal",     yearFormed: 2017,},
  { id: 5, name: "Acoustic Echoes",   numberOfMembers: 2,  musicalGenre: "Acoustic",  yearFormed: 2021,},
  { id: 6, name: "Jazz Junction",     numberOfMembers: 4,  musicalGenre: "Jazz",      yearFormed: 2016,},
  { id: 7, name: "Country Roads",     numberOfMembers: 3,  musicalGenre: "Country",   yearFormed: 2022,},
  { id: 8, name: "Indie Vibes",       numberOfMembers: 3,  musicalGenre: "Indie",     yearFormed: 2020,}
  ],
  
  
  
bookings : [
    { id: 1,   dateOfBooking:  "2023-12-10",    venueId: 6,   bandId: 3    },
    { id: 2,   dateOfBooking:  "2023-12-14",    venueId: 3,   bandId: 3    },
    { id: 3,   dateOfBooking:  "2023-12-15",    venueId: 7,   bandId: 3    },
    { id: 4,   dateOfBooking:  "2023-12-23",    venueId: 1,   bandId: 3    },
    { id: 5,   dateOfBooking:  "2023-12-24",    venueId: 4,   bandId: 3    },
    { id: 6,   dateOfBooking:  "2023-12-25",    venueId: 1,   bandId: 3    },
    
  ],
  

}
  
  
 // export to get all venues
export const exportVenues = () => {
    return database.venues.map(venue => ({ ...venue}));
  };
  
  // export to get all bands
export const exportBands = () => {
    return database.bands.map(band =>({...band}));
  };
  
  // export to get all bookings
export const exportBookings = () => {
    return database.bookings.map(booking => ({...booking}));
  };
  

  
  