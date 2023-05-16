using RestSharp;

namespace DeskOfCardsAPI.Models
{
    public class DeskDAL { 
    public Desk GetDesk()
    {
        string URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
        RestClient client = new RestClient(URL);
        RestRequest request = new RestRequest();

        Desk d = client.Get<Desk>(request);

        return d;
    }

    public Hand GetHand(string id)
    {
        string url = $"https://deckofcardsapi.com/api/deck/{id}/draw/?count=5";
        RestClient client = new RestClient(url);
        RestRequest request = new RestRequest();

        Hand h = client.Get<Hand>(request);

        return h;
    }
    }
}
