using RestSharp;

namespace SeachOMDB.Models
{
    public class MovieDAL
    {

        public Movie GetMovie(string title)
        {
           
            string URL = $"https://www.omdbapi.com/?apikey=29e2d2b7&t={title}";
            RestClient client = new RestClient(URL);
            RestRequest request = new RestRequest();

            Movie m = client.Get<Movie>(request);

            return m;
        }

    }
}
