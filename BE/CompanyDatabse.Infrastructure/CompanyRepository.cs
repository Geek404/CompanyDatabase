using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using CompanyDatabase.DataAccess;
using CompanyDatabase.DataAccess.IRepositories;
using CompanyDatabase.DataAccess.Models;


namespace CompanyDatabase.Infrastructure
{
   public class CompanyRepository : ICompanyRepository
   {
      public IEnumerable<Company> LoadAll()
      {

         using (var db = new CompanyDatabaseContext())
         {
            return db.Companies.ToList();
         }
      }

      public int Create(Company entity)
      {
         using (var db = new CompanyDatabaseContext())
         {
            db.Companies.Add(entity);
            db.SaveChanges();
            return entity.Id;
         }
      }

      public int Update(Company entity)
      {
         using (var db = new CompanyDatabaseContext())
         {
            db.Companies.AddOrUpdate(entity);
            db.SaveChanges();
            return entity.Id;
         }

      }

      public Company Get(int id)
      {
         using (var db = new CompanyDatabaseContext())
         {
            return db.Companies.FirstOrDefault(x => x.Id == id);
         }
      }

      public bool Delete(int id)
      {
         using (var db = new CompanyDatabaseContext())
         {
            var client = db.Companies.Find(id);
            db.Companies.Remove(client ?? throw new InvalidOperationException());
            db.SaveChanges();
            return true;
         }
      }
   }
}
