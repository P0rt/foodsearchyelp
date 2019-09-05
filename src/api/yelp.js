import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 
        'Bearer ATlpdJJ0maEC4hmxc7BZ44bm5EVUX9lAUryGgd0cH1Z5OrtJUGrX358udRmeTRry56ceDxt4qNE1w7ZBm-yqNTV2Et_SfmJ_e0n8FEkWzTub5wWA4faRGl-U9jhpXXYx'
    }
});