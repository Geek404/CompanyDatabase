using System;
using Newtonsoft.Json;

namespace CompanyDatabase.DataAccess.Models
{
   public class Base
   {
      [JsonProperty(PropertyName = "id")]
      public int Id { get; set; }

      [JsonProperty(PropertyName = "create_date")]
      public DateTime CreateDate { get; set; }

      [JsonProperty(PropertyName = "update_date")]
      public DateTime UpdateDate { get; set; }
   }
}
