import { useState } from "react";

interface Request {
    studentName: String;
    studentID: String;
    bookTitle: String;
    author: String;
    reason: String;
    request: String;
}
function BookRequest(){

    const[studentName, setStudentName] = useState<string>("");
    const[studentID, setStudentID] =useState<string>("");
    const[bookTitle, setBookTitle] =useState<string>("");
    const[author, setAuthor] =useState<string>("");
    const[reason, setReason] = useState<string>("");
    const[request, setRequest] = useState<string>("");

    return(
        <>
        
        </>
    )
}
export default BookRequest;