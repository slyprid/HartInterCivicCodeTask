namespace HartInterCivicCodeTask.Models
{
    public class Item
    {
        public string Description { get; set; }
        public int Count { get; set; }

        public Item()
        {
            Description = string.Empty;
            Count = 0;
        }
    }
}