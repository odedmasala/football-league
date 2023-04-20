import axios from "axios";

export const getLeagues = async () =>{
    const res = await axios.get("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")   
    return res
}

export const getTeamsInLeague = async (leagueName:string) =>{
    const editLeagueName = leagueName.replaceAll(" ","_")
    const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${editLeagueName}`) 
    return res 
}