using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MobileStore.Models
{
    public class MobileStoreContext :DbContext
    {

        public MobileStoreContext(DbContextOptions<MobileStoreContext> options)
              : base(options)
        {
        }

        public DbSet<Mobile> Mobile { get; set; }

    }
}
