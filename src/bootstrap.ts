import { User } from "./models/user";
import { Genre } from "./models/genre";
import { Borrow } from "./models/borrow";
import { Book } from "./models/book";
import { BookGenre } from "./models/bookGenre";
import { BookWriter } from "./models/bookWriter";
import { Writer } from "./models/writer";


export async function bootstrap(){
    const dependencies = [User, Writer, Book, Genre, Borrow, BookGenre, BookWriter]
    const prom = dependencies.map(async (dependency) => {
        return dependency.sync()
    })
    await Promise.all(prom)
}