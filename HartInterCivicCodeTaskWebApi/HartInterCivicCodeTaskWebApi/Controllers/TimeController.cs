using Microsoft.AspNetCore.Mvc;

namespace HartInterCivicCodeTaskWebApi.Controllers
{
    [Route("api/Time")]
    [ApiController]
    public class TimeController 
        : ControllerBase
    {
        [HttpGet]
        public DateTime StartTime()
        {
            return DateTime.Now.AddSeconds(20);
        }

        [HttpPost]
        public void EndTime(string endTime)
        {
            var filename = "log.txt";
            if (!System.IO.File.Exists(filename))
            {
                System.IO.File.Create(filename);
            }

            System.IO.File.AppendAllText(filename, $"{endTime}\r\n");
        }
    }
}