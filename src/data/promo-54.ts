import { createPromo } from "../lib/promoFactory";

export const promo54 = createPromo({
  id: "promo-54",
  title: "Conrad Guangzhou",
  dates: "Apr 23–28, 2026",
  client: "",
  hotels: [
    {
      name: "Conrad Guangzhou",
      location: "Guangzhou, China",
      heroImageUrl:
        "https://www.hilton.com/im/en/CANXWCI/16143930/img-6121.jpg?impolicy=crop&cw=5000&ch=2992&gravity=NorthWest&xposition=0&yposition=170&rw=1600&rh=957",
      heroAlt: "Conrad Guangzhou hotel room with river view",
      rooms: [
        {
          name: "Twin Deluxe Room Canton Tower River View",
          subtitle: "Canton Tower River View · 2 Twin Beds",
          badgeText: "Hotel Offer 15% Off",
          adr: "¥2,409.41",
          grandTotal: "¥14,046.87",
          nights: 5,
          checkIn: "2026-04-23",
          checkOut: "2026-04-28",
          bookUrl:
            "https://www.whatahotel.com/booking/booking_info.cfm?room=A05BA6C&rate=I70&hotel=4126&checkin=2026-04-23&checkout=2026-04-28&guests=2&children=0&rooms=1",
          images: [
            {
              src: "https://www.hilton.com/im/en/CANXWCI/16143930/img-6121.jpg?impolicy=crop&cw=5000&ch=2992&gravity=NorthWest&xposition=0&yposition=170&rw=1600&rh=957",
              alt: "Twin Deluxe Room",
            },
            {
              src: "https://www.hilton.com/im/en/CANXWCI/16215597/t2dv-2-.jpg?impolicy=crop&cw=5000&ch=2992&gravity=NorthWest&xposition=0&yposition=170&rw=1600&rh=957",
              alt: "Guest Room",
            },
          ],
          roomHighlights: [
            "Canton Tower River View with 2 twin beds",
            "Accommodates 2 guests",
          ],
          perks: [
            "Room Category Upgrade if available at Check-in",
            "Full Breakfast x 2 Daily",
            "$100 Food & Beverage Credit",
            "Free WiFi",
            "Late Check-out, subject to availability",
            "Double Hilton Honors Rewards Points",
          ],
        },
      ],
    },
  ],
});
