using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using CompanyDatabase.DataAccess.Models;

namespace CompanyDatabase.DataAccess
{
   public class CompanyDatabaseContext : DbContext
   {
      public CompanyDatabaseContext() : base("CompanyDatabase")
      {
      }

      public virtual DbSet<Models.Company> Companies { get; set; }

      public override int SaveChanges()
      {
         AddTimestamps();
         return base.SaveChanges();
      }

      private void AddTimestamps()
      {
         var entities = ChangeTracker.Entries().Where(x => x.Entity is Base && (x.State == EntityState.Added || x.State == EntityState.Modified));
         foreach (var entity in entities)
         {
            if (entity.State == EntityState.Added)
            {
               ((Base)entity.Entity).CreateDate = DateTime.UtcNow;
            }
            ((Base)entity.Entity).UpdateDate = DateTime.UtcNow;
         }
      }

      protected override void OnModelCreating(DbModelBuilder modelBuilder) => modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
   }
}


