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
            return DateTime.Now;
        }

        [HttpPost("{endTime}")]
        public void EndTime(DateTime endTime)
        {
            // Log endTime
        }
    }
}