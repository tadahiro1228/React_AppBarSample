import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (users) => {
  const usersForExport = users.map((user) => {
    const { backlinks, author, ...userForExport } = user; // omit backlinks and author
    userForExport.author_name = user.author.name; // add a field
    return userForExport;
  });
  jsonExport(
    usersForExport,
    {
      headers: ["id", "user", "username", "author_name"] // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "users"); // download as 'posts.csv` file
    }
  );
};

export default exporter;
