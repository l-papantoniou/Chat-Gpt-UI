// amenitiesOptions.js
import BathroomIcon from '@mui/icons-material/Bathtub';
import RoomIcon from '@mui/icons-material/BedroomParent';
import MediaIcon from '@mui/icons-material/Tv';
import FoodIcon from '@mui/icons-material/Restaurant';
import ServiceIcon from '@mui/icons-material/RoomService';
import OutdoorIcon from '@mui/icons-material/Park';
import ParkingIcon from '@mui/icons-material/LocalParking';
import GeneralIcon from '@mui/icons-material/Store';
import SafetyIcon from '@mui/icons-material/VerifiedUser';
import PoolIcon from '@mui/icons-material/Pool';
import AccessibilityIcon from '@mui/icons-material/Accessible';
import FamilyIcon from '@mui/icons-material/FamilyRestroom';
import CleaningIcon from '@mui/icons-material/CleaningServices';
// ... import other icons ...

export const amenityOptions = {
    'Bathroom': {
        icon: <BathroomIcon/>,
        amenities: ['Shower', 'Bathtub', 'Toilet', 'Free toiletries', 'Private Bathroom', 'Hairdryer', 'Towels', 'Slippers', 'Bathrobe']
    },
    'Room Amenities': {
        icon: <RoomIcon/>,
        amenities: ['Air conditioning', 'Desk', 'Ironing facilities', 'Seating Area', 'Heating', 'Dressing Room', 'Interconnected room(s) available', 'Sofa', 'Soundproof', 'Wardrobe or closet', 'Hypoallergenic']
    },
    'Media & Technology': {
        icon: <MediaIcon/>,
        amenities: ['TV', 'Cable Channels', 'Satellite Channels', 'Flat-screen TV', 'Telephone', 'Wi-Fi']
    },
    'Food & Drink': {
        icon: <FoodIcon/>,
        amenities: ['Minibar', 'Electric kettle', 'Coffee machine', 'Dining table', 'Room service', 'Breakfast in the room', 'Good Breakfast', 'Very Good Breakfast', 'Tea/Coffee Maker in All Rooms', 'Restaurant', 'Bar']
    },
    'Services & Extras': {
        icon: <ServiceIcon/>,
        amenities: ['Wake-up service', 'Towels/Sheets', 'VIP room facilities', 'Bridal suite', 'Newspapers', 'Safety Deposit Box']
    },
    'Outdoor & View': {
        icon: <OutdoorIcon/>,
        amenities: ['Balcony', 'Terrace', 'City view', 'Garden view', 'Pool view', 'Sea view', 'Mountain view', 'Landmark view']
    },
    'Parking & Transportation': {
        icon: <ParkingIcon/>,
        amenities: ['Free parking', 'Private Parking', 'Airport shuttle', 'Car hire', 'Secured parking', 'Street parking', 'Electric vehicle charging station']
    },
    'General': {
        icon: <GeneralIcon/>,
        amenities: ['Wi-Fi', 'Non-smoking rooms', 'Family rooms', 'Pet-friendly', 'Facilities for disabled guests', 'Elevator', 'Non-smoking throughout', 'Air conditioning', 'Heating']
    },
    'Safety & Security': {
        icon: <SafetyIcon/>,
        amenities: ['Security alarm', '24-hour security', 'Safety deposit box', 'CCTV in common areas', 'Fire extinguishers']
    },
    'Pool & Wellness': {
        icon: <PoolIcon/>,
        amenities: ['Fitness centre', 'Spa', 'Spa and wellness centre', 'Massage', 'Hot tub/jacuzzi', 'Sauna', 'Outdoor pool', 'Indoor pool', '2 swimming pools']
    },
    'Accessibility': {
        icon: <AccessibilityIcon/>,
        amenities: ['Wheelchair accessible', 'Toilet with grab rails', 'Higher level toilet', 'Lower bathroom sink']
    },
    'Entertainment & Family Services': {
        icon: <FamilyIcon/>,
        amenities: ['Babysitting/child services', 'Nightclub/DJ', 'Evening entertainment', 'Board games/puzzles', 'Books, DVDs, music for children', 'Indoor play area']
    },
    'Cleaning Services': {
        icon: <CleaningIcon/>,
        amenities: ['Laundry', 'Dry cleaning', 'Ironing service', 'Daily housekeeping']
    },
    // ... more categories with icons ...
};

