import {Query} from "./index"
import authorsDB from "../db/authors"

const  allauthors = async () =>
  Query("SELECT * FROM Authors");

//   const  oneauthor = async () =>
//   Query();

//   const  updateauthor = async () =>
//   Query();

  const  postauthor = async (name:string, email:string) =>
  Query("INSERT INTO Authors(name, email) values (?,?)", [name, email]);

//   const  deleteauthor = async () =>
//   Query();

  export default{
    allauthors,
    // oneauthor,
    // updateauthor,
    postauthor,
    // deleteauthor
  }