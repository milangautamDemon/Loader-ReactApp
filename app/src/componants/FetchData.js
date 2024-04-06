const FetchData = async() => {

    const fetchUsersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await fetchUsersData.json();
    return usersData;

}
export default FetchData;