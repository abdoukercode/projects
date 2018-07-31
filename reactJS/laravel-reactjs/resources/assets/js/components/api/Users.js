import axios from 'axios';

const getUsers = () =>
            axios.get("http://localhost:8000/api/users")
                .then(res=> res.data)
                .catch(err => err)

export default getUsers;