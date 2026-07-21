import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <div style={{ marginLeft: "30px" }}>
      <h1>Blogger App</h1>

      <BookDetails />
      <hr />

      <BlogDetails />
      <hr />

      <CourseDetails />
    </div>
  );
}

export default App;