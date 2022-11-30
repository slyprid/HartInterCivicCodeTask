using System.Collections;

namespace HartInterCivicCodeTask.Models
{
    public class Inventory
        : IEnumerable<Item>
    {
        private readonly IEnumerable<Item> _items;

        public Inventory()
        {
            _items = new List<Item>();
        }

        public IEnumerator<Item> GetEnumerator()
        {
            var items = _items.ToList();
            for (var i = 0; i < items.Count(); i++)
            {
                var item = items[i];
                yield return item;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}