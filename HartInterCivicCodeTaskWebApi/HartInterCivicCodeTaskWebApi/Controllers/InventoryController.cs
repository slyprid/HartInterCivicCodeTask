using HartInterCivicCodeTaskWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using MMLib.RapidPrototyping.Generators;

namespace HartInterCivicCodeTaskWebApi.Controllers
{
    [Route("api/Inventory")]
    [ApiController]
    public class InventoryController 
        : ControllerBase
    {
        private readonly LoremIpsumGenerator _loremIpsum;
        private readonly Random _rnd;

        public InventoryController()
        {
            _loremIpsum = new LoremIpsumGenerator();
            _rnd = new Random();
        }

        [HttpGet(Name = "Get")]
        public IEnumerable<Item> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Item
            {
                Description = _loremIpsum.Next(1, 1),
                Count = _rnd.Next(0, 100)
            })
            .ToArray();
        }
    }
}