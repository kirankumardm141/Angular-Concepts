using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MobileStore.Models;
using Microsoft.EntityFrameworkCore;

namespace MobileStore.Controllers
{
    [Route("api/[controller]")]
    public class MobilesController : Controller
    {

        private MobileStoreContext _mobileStoreContext = null;

        public MobilesController(MobileStoreContext mobileContext)
        {
            _mobileStoreContext = mobileContext;
        }

        List<Mobile> mobiles = new  List<Mobile>();
        // GET api/values
        [HttpGet]
        public IEnumerable<Mobile> Get()
        {


            //mobiles.Add(
            //    new Mobile(){ 
            //    msId = 1,
            //     name = "Motorola",
            //    releaseDate = "March 19, 2016",
            //    description = "Motorola Rocks.",
            //    price = "10000",
            //    available = "2",
            //    image = "motorola-moto-m-.jpeg"

            //    });
            ////return new string[] { "value1", "value2" };
            return _mobileStoreContext.Mobile.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Mobile Get(int id)
        {
            return _mobileStoreContext.Mobile.ToList().Find(item => item.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
