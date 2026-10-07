export type Locale = "en" | "vi";

type Bi = { en: string; vi: string };

export function t(locale: Locale, text: Bi) {
  return text[locale];
}

export const landingCopy = {
  brand: "The Chicken Fortress",
  nav: {
    overview: { en: "Overview", vi: "Tổng quan" },
    products: { en: "Product", vi: "Sản phẩm" },
    how: { en: "How it works", vi: "Cơ chế" },
    features: { en: "Features", vi: "Tính năng" },
    specs: { en: "Specs", vi: "Thông số" },
    economics: { en: "Economics", vi: "Hiệu quả" },
  },
  hero: {
    tagline: {
      en: "Zero Waste. Minimal Odor. Maximum Profit.",
      vi: "Không chất thải. Giảm thiểu mùi. Lợi nhuận tối đa.",
    },
    headline: {
      en: "The World’s First Integrated Poultry–Vermiculture System",
      vi: "Hệ thống tích hợp nuôi gà – trùn quế đầu tiên trên thế giới",
    },
    subhead: {
      en: "The Chicken Fortress turns a recycled shipping container into a self-cleaning habitat for 100 laying hens — premium pasture-raised eggs plus high-value worm castings, with feed costs slashed by insects and foraging.",
      vi: "Chicken Fortress biến container tái chế thành môi trường tự làm sạch cho 100 gà mái đẻ — trứng chăn thả cao cấp cùng phân trùn giá trị cao, chi phí thức ăn giảm mạnh nhờ côn trùng và chăn thả.",
    },
    ctaExplore: { en: "Explore Product", vi: "Khám phá sản phẩm" },
    promise: { en: "Never shovel chicken manure again.", vi: "Không còn phải xúc phân gà." },
    ctaContact: { en: "Discuss your farm", vi: "Tư vấn trang trại" },
    imageAlt: { en: "The Chicken Fortress exterior", vi: "Ngoại thất Chicken Fortress" },
  },
  trust: [
    { icon: "eco", title: { en: "Minimal Odor · 6-Day Processing", vi: "Giảm mùi · Xử lý trong 6 ngày" } },
    { icon: "nutrition", title: { en: "50%+ Feed Reduction", vi: "Giảm hơn 50% thức ăn" } },
    { icon: "cycle", title: { en: "Double Revenue", vi: "Doanh thu kép" } },
    { icon: "conveyor_belt", title: { en: "Container-Portable", vi: "Di động theo container" } },
  ],
  company: {
    kicker: { en: "Company Overview", vi: "Tổng quan công ty" },
    title: { en: "Công Ty Kim Và Gordon", vi: "Công Ty Kim Và Gordon" },
    body: {
      en: "An ag-tech startup based in Tây Ninh, Vietnam, building modular, sustainable poultry systems for small to mid-scale farmers. Our flagship product, The Chicken Fortress, turns standard shipping containers into high-efficiency habitats for 100 laying hens—designed around a circular waste-to-feed loop and pasture access.",
      vi: "Startup ag-tech tại Tây Ninh, Việt Nam, phát triển hệ thống nuôi gà mô-đun bền vững cho nông hộ và trang trại quy mô vừa. Sản phẩm chủ lực The Chicken Fortress biến container tiêu chuẩn thành chuồng nuôi hiệu suất cao cho 100 con gà mái đẻ—thiết kế theo mô hình tuần hoàn phân → đạm và cho gà ra bãi chăn thả.",
    },
  },
  product: {
    kicker: { en: "Product Detail", vi: "Chi tiết sản phẩm" },
    title: { en: "The 100-Hen Smart Container", vi: "Container thông minh cho 100 con gà" },
    body1: {
      en: "The Chicken Fortress converts a standard 20 ft shipping container into a habitat for up to 100 laying hens. Conventional manure can take up to six months to compost. Here, slatted flooring drops manure into an epoxy-coated vermiculture pit, naturally attracting worms and native flies that process it in about six days with minimal odor. The insects become free protein for the hens, while timed electric doors provide daytime pasture access for foraging.",
      vi: "The Chicken Fortress biến container 20 ft tiêu chuẩn thành môi trường nuôi tối đa 100 gà mái đẻ. Phân thông thường có thể mất tới sáu tháng để ủ. Tại đây, sàn lam dẫn phân xuống hố nuôi trùn phủ epoxy, tự thu hút trùn và ruồi bản địa xử lý trong khoảng sáu ngày với mùi được giảm thiểu. Côn trùng trở thành nguồn đạm miễn phí cho gà; cửa điện hẹn giờ giúp gà ra bãi tự kiếm ăn ban ngày.",
    },
    viewDetails: { en: "See full product details", vi: "Xem chi tiết sản phẩm đầy đủ" },
    stat1: { en: "Capacity", vi: "Công suất" },
    stat1Value: { en: "100 Hens", vi: "100 con gà" },
    stat2: { en: "Manure → Fertilizer", vi: "Phân → phân bón" },
    stat2Value: { en: "6 Days", vi: "6 ngày" },
  },
  valueProp: {
    title: { en: "Unique Value Proposition", vi: "Lợi thế khác biệt" },
    intro: {
      en: "The Chicken Fortress is designed as an integrated system—portable, circular, and farmer-friendly.",
      vi: "The Chicken Fortress được thiết kế như một hệ thống tích hợp—di động, tuần hoàn và dễ vận hành.",
    },
    bullets: [
      {
        title: { en: "Closed-loop vermiculture + larvae recycling", vi: "Tuần hoàn trùn quế + ấu trùng" },
        desc: {
          en: "Manure is consumed by worms and native flies before ammonia builds; larvae/worm protein returns directly to the hens.",
          vi: "Phân được trùn và ruồi bản địa xử lý trước khi phát sinh amoniac; nguồn đạm (ấu trùng/trùn) quay lại cho gà ăn trực tiếp.",
        },
      },
      {
        title: { en: "Feed savings from recycled protein", vi: "Tiết kiệm thức ăn nhờ đạm tái chế" },
        desc: {
          en: "Up to ~20% feed savings from insect protein recycling, plus additional reduction via pasture foraging.",
          vi: "Tiết kiệm khoảng ~20% thức ăn nhờ đạm côn trùng, và giảm thêm nhờ gà tự kiếm ăn khi ra bãi.",
        },
      },
      {
        title: { en: "Timed pasture access", vi: "Ra bãi theo lịch" },
        desc: {
          en: "Electric doors enable daytime pasture access for natural foraging and welfare improvements.",
          vi: "Cửa điện hẹn giờ giúp gà ra bãi ban ngày để tự kiếm ăn và cải thiện phúc lợi.",
        },
      },
      {
        title: { en: "Portable, container-compatible design", vi: "Thiết kế di động theo chuẩn container" },
        desc: {
          en: "Ships fully ready to use with shipping included. Place the unit on four cinder blocks; no installation is needed.",
          vi: "Giao chuồng hoàn thiện, sẵn sàng sử dụng và đã bao gồm vận chuyển. Đặt chuồng lên bốn khối gạch bê tông kê đỡ; không cần lắp đặt.",
        },
      },
    ],
  },
  how: {
    title: { en: "Circular Ecosystem Flow", vi: "Quy trình hệ sinh thái tuần hoàn" },
    activationNote: {
      en: "New vermiculture pits may need up to 10 days to accumulate enough manure to reach the activation threshold. Insufficient manure reduces processing efficiency; the approximate 6-day cycle applies once the system is active.",
      vi: "Hố nuôi trùn mới có thể cần tới 10 ngày để tích đủ phân và đạt ngưỡng hoạt động. Thiếu phân sẽ làm giảm hiệu suất xử lý; chu kỳ khoảng 6 ngày áp dụng khi hệ đã hoạt động.",
    },
    videoLabel: { en: "Watch the vermiculture system", vi: "Xem hệ thống nuôi trùn hoạt động" },
    steps: [
      { icon: "auto_delete", en: "Waste to Vermiculture", vi: "Chất thải đến nuôi trùn quế" },
      { icon: "bug_report", en: "Worms + Flies Consume Waste", vi: "Trùn + ruồi xử lý chất thải" },
      { icon: "restaurant", en: "Larvae/Worm Protein Returns", vi: "Nguồn đạm (ấu trùng/trùn) quay lại cho gà" },
      { icon: "grass", en: "Daytime Pasture Access", vi: "Ra bãi chăn thả ban ngày" },
    ],
  },
  included: {
    title: {
      en: "What You Get With Every Chicken Fortress",
      vi: "Mỗi Chicken Fortress đều bao gồm",
    },
    intro: {
      en: "Everything below comes standard — a complete unit ready for up to 100 hens. Shipping is included; chickens are not supplied due to import restrictions.",
      vi: "Tất cả hạng mục dưới đây đều là tiêu chuẩn — chuồng hoàn thiện cho tối đa 100 gà mái. Đã bao gồm vận chuyển; không cung cấp gà do hạn chế nhập khẩu.",
    },
    items: [
      {
        en: "18 nesting compartments with roll-away egg collection — harvest clean eggs from the maintenance room without entering the chicken area.",
        vi: "18 ô đẻ với trứng tự lăn — thu trứng sạch từ phòng bảo trì mà không cần vào khu nuôi gà.",
      },
      { en: "Overhead perches for up to 100 laying hens.", vi: "Sào đậu phía trên cho tối đa 100 con gà mái đẻ." },
      { en: "55-gallon water drum with nipple drinkers.", vi: "Thùng nước 55 gallon với hệ núm uống tự động." },
      { en: "Gravity-fed closed feed hopper and feeding line.", vi: "Phễu cấp ăn kín theo trọng lực và đường máng ăn." },
      {
        en: "Removable slatted flooring over a food-grade epoxy-coated vermiculture pit.",
        vi: "Sàn lam tháo rời phía trên hố nuôi trùn phủ epoxy đạt chuẩn thực phẩm.",
      },
      {
        en: "Fully self-cleaning integrated vermiculture system — manure processed in 6 days.",
        vi: "Hệ trùn quế tích hợp tự làm sạch — phân được xử lý trong 6 ngày.",
      },
      {
        en: "Automatic electric chicken door — timed pasture access with night predator protection.",
        vi: "Cửa gà điện tự động — hẹn giờ ra bãi và bảo vệ khỏi thú săn ban đêm.",
      },
      {
        en: "Large maintenance door for easy access to the supply/egg room.",
        vi: "Cửa bảo trì lớn giúp ra vào phòng vật tư/thu trứng dễ dàng.",
      },
      {
        en: "4 polycarbonate natural daylight openings for maximum egg production.",
        vi: "4 cửa lấy sáng tự nhiên bằng polycarbonate để tối đa sản lượng trứng.",
      },
      {
        en: "Multiple high and low ventilation openings with louvers for natural airflow.",
        vi: "Nhiều cửa thông gió cao–thấp có lá sách cho luồng khí đối lưu tự nhiên.",
      },
      {
        en: "Secondary maintenance/supply room with gravity feeder, water system, and egg tray.",
        vi: "Phòng bảo trì/vật tư phụ chứa phễu cấp ăn, hệ nước và khay thu trứng.",
      },
    ],
  },
  upgrades: {
    title: { en: "A Better Fortress, Inside and Out", vi: "Nâng cấp từ trong ra ngoài" },
    intro: {
      en: "The finalized design follows extensive prototype testing in Tây Ninh, Vietnam, with improvements to cooling, nesting comfort, feed delivery, and castings collection.",
      vi: "Thiết kế hoàn thiện sau quá trình thử nghiệm kỹ lưỡng mẫu chuồng tại Tây Ninh, Việt Nam, với cải tiến về chống nóng, ổ đẻ, cấp thức ăn và thu phân trùn.",
    },
    designCaption: { en: "Updated layout — living area, perches, nesting boxes, and a separate maintenance room", vi: "Bố trí mới — khu nuôi, sào đậu, ổ đẻ và phòng bảo trì riêng" },
    images: [
      { src: "/images/new-plastic-nesting.webp", caption: { en: "Plastic nesting boxes — safer and more comfortable than the original metal boxes", vi: "Ổ đẻ bằng nhựa — an toàn và thoải mái hơn ổ kim loại cũ" } },
      { src: "/images/new-feed-pipe.webp", caption: { en: "Larger feed pipe — helps prevent clogs in the gravity-fed line", vi: "Ống cấp ăn lớn hơn — giúp tránh tắc nghẽn đường cấp theo trọng lực" } },
      { src: "/images/new-castings-outlet.webp", caption: { en: "Floor discharge port — removes excess worm castings", vi: "Cửa xả dưới sàn — thu lượng phân trùn dư" } },
    ],
    items: [
      { title: { en: "Triple-layer reflective paint", vi: "Sơn phản xạ nhiệt 3 lớp" }, desc: { en: "Kova claims 90% heat reflection for two coats of its Chống Nóng Heat Shield paint. The finalized Fortress uses three coats, with improved performance expected compared with the two-coat prototype shown in the test video.", vi: "Kova công bố khả năng phản xạ nhiệt 90% khi sơn hai lớp Chống Nóng Heat Shield. Fortress hoàn thiện dùng ba lớp, với hiệu quả được kỳ vọng cao hơn mẫu thử hai lớp trong video." } },
      { title: { en: "Larger air vents", vi: "Cửa thông gió lớn hơn" }, desc: { en: "44% more vent surface area supports the passive airflow system.", vi: "Diện tích cửa gió tăng 44%, hỗ trợ hệ đối lưu không khí tự nhiên." } },
      { title: { en: "Plastic nesting boxes", vi: "Ổ đẻ bằng nhựa" }, desc: { en: "More comfortable and safer for hens than the original metal nesting boxes.", vi: "Thoải mái và an toàn hơn cho gà so với ổ đẻ kim loại ban đầu." } },
      { title: { en: "Upgraded vermiculture pit", vi: "Hố nuôi trùn cải tiến" }, desc: { en: "3 manure aggregation ramps and 2 collection outlets. 3 mm filters hold back large manure clumps while letting fine worm castings pass through.", vi: "3 dốc gom phân và 2 cửa thu. Lưới lọc 3 mm chặn các cục phân lớn và cho phân trùn mịn đi qua." } },
      { title: { en: "Corner ramp panels", vi: "Tấm dốc chắn góc" }, desc: { en: "Discourage hens from laying in corners instead of the nesting boxes.", vi: "Hạn chế gà đẻ ở các góc thay vì trong ổ đẻ." } },
      { title: { en: "Garden-hose water connection", vi: "Đầu nối nước cho vòi tưới" }, desc: { en: "The 55-gallon drum intake now uses a threaded male garden-hose connector.", vi: "Ống cấp nước vào thùng 55 gallon sử dụng đầu nối ren ngoài cho vòi tưới vườn." } },
    ],
    videoLabel: { en: "Watch the heat-shield test", vi: "Xem thử nghiệm chống nóng" },
  },
  features: {
    title: { en: "Engineering Excellence", vi: "Kỹ thuật xuất sắc" },
    cards: [
      {
        icon: "sensor_door",
        title: { en: "Automated Doors", vi: "Cửa tự động" },
        desc: {
          en: "Electric doors provide scheduled pasture access while keeping operations simple.",
          vi: "Cửa điện cho gà ra bãi theo lịch, vận hành đơn giản và an toàn.",
        },
      },
      {
        icon: "nest_eco_leaf",
        title: { en: "Roll-away Nesting", vi: "Ổ đẻ trứng tự lăn" },
        desc: {
          en: "18 roll-away nesting boxes reduce contamination and keep eggs cleaner.",
          vi: "18 ổ đẻ tự lăn giúp giảm bẩn vỏ trứng và hạn chế dập vỡ.",
        },
      },
      {
        icon: "water_drop",
        title: { en: "Gravity Feed", vi: "Máng ăn trọng lực" },
        desc: {
          en: "Closed hopper + gravity feed; simple refills with less waste.",
          vi: "Phễu kín + cấp ăn trọng lực; tiếp thức dễ và giảm thất thoát.",
        },
      },
      {
        icon: "air",
        title: { en: "Passive Ventilation", vi: "Thông gió tự nhiên" },
        desc: {
          en: "Vent openings with louvers support airflow and reduce wind speed.",
          vi: "Cửa thông gió có lá sách giúp đối lưu không khí và giảm gió tạt.",
        },
      },
      {
        icon: "engineering",
        title: { en: "Maintenance Room", vi: "Phòng bảo trì" },
        desc: {
          en: "A dedicated clean room for egg collection and refilling feed/water with minimal disturbance.",
          vi: "Không gian sạch riêng để thu trứng và tiếp thức ăn/nước, ít làm gà bị stress.",
        },
      },
      {
        icon: "local_shipping",
        title: { en: "Transport-ready", vi: "Sẵn sàng vận chuyển" },
        desc: {
          en: "Optimized for standard truck and ship dimensions.",
          vi: "Tối ưu theo kích thước tiêu chuẩn xe tải và tàu.",
        },
      },
    ],
  },
  specs: {
    title: {
      en: "Technical Specifications & Engineering Details",
      vi: "Thông số kỹ thuật & chi tiết kết cấu",
    },
    intro: {
      en: "For farmers, builders, agricultural engineers, and compliance officers.",
      vi: "Dành cho nông hộ, đơn vị thi công, kỹ sư nông nghiệp và cán bộ kiểm định.",
    },
    groups: [
      {
        title: { en: "Overall Dimensions & Capacity", vi: "Kích thước tổng thể & công suất" },
        rows: [
          {
            label: { en: "External footprint", vi: "Kích thước ngoài" },
            value: { en: "6050 mm L × 2430 mm W (20 ft container base)", vi: "6050 mm dài × 2430 mm rộng (đế container 20 ft)" },
          },
          { label: { en: "Designed capacity", vi: "Công suất thiết kế" }, value: { en: "100 laying hens", vi: "100 con gà mái đẻ" } },
          {
            label: { en: "Room 1", vi: "Phòng 1" },
            value: { en: "Living area + nesting + vermiculture pit below", vi: "Khu sống + khu đẻ + hố trùn quế bên dưới" },
          },
          { label: { en: "Room 2", vi: "Phòng 2" }, value: { en: "Maintenance / supply room", vi: "Phòng bảo trì / vật tư" } },
        ],
      },
      {
        title: { en: "Structural Framework & Materials", vi: "Kết cấu khung & vật liệu" },
        rows: [
          {
            label: { en: "Primary structure", vi: "Kết cấu chính" },
            value: { en: "Recycled 20 ft shipping container, reinforced openings", vi: "Container 20 ft tái chế, gia cố các ô mở" },
          },
          {
            label: { en: "Internal wood framing", vi: "Khung gỗ bên trong" },
            value: { en: "Pine 50×100 mm & 100×100 mm", vi: "Gỗ thông 50×100 mm & 100×100 mm" },
          },
          { label: { en: "Steel support", vi: "Khung thép hỗ trợ" }, value: { en: "30×60 mm box frame", vi: "Khung hộp 30×60 mm" } },
          {
            label: { en: "Walls & ceilings", vi: "Tường & trần" },
            value: { en: "PUR insulation board + plastic panel finish", vi: "Tấm cách nhiệt PUR + hoàn thiện panel nhựa" },
          },
          { label: { en: "Vermiculture pit", vi: "Hố trùn quế" }, value: { en: "Food-grade epoxy coating", vi: "Phủ epoxy đạt chuẩn thực phẩm" } },
          {
            label: { en: "Aluminum parts", vi: "Chi tiết nhôm" },
            value: { en: "Manure deflector + chick protection panels", vi: "Tấm hắt phân + tấm bảo vệ gà con" },
          },
        ],
      },
      {
        title: { en: "Flooring & Vermiculture System", vi: "Sàn & hệ trùn quế" },
        rows: [
          {
            label: { en: "Flooring", vi: "Sàn" },
            value: { en: "Removable slats over the full vermiculture zone", vi: "Sàn lam tháo rời phủ toàn bộ vùng nuôi trùn" },
          },
          {
            label: { en: "Waste processing", vi: "Xử lý chất thải" },
            value: { en: "Worms + native flies, ~6 days (90% reduction vs composting)", vi: "Trùn + ruồi bản địa, ~6 ngày (giảm 90% thời gian so với ủ phân)" },
          },
          {
            label: { en: "Protein return", vi: "Hoàn đạm" },
            value: { en: "Mature worms spill over (~20% feed replacement)", vi: "Trùn trưởng thành tràn sang (thay ~20% thức ăn)" },
          },
          { label: { en: "Hygiene", vi: "Vệ sinh" }, value: { en: "Food-grade epoxy, minimal odor", vi: "Epoxy đạt chuẩn thực phẩm, giảm thiểu mùi" } },
          { label: { en: "Activation", vi: "Khởi động" }, value: { en: "Up to 10 days to accumulate enough manure", vi: "Tới 10 ngày để tích đủ lượng phân" } },
          { label: { en: "Collection", vi: "Thu phân trùn" }, value: { en: "3 aggregation ramps, 2 outlets, 3 mm filters", vi: "3 dốc gom phân, 2 cửa thu, lưới lọc 3 mm" } },
        ],
      },
      {
        title: { en: "Nesting & Egg Collection", vi: "Khu đẻ & thu trứng" },
        rows: [
          { label: { en: "Compartments", vi: "Số ô đẻ" }, value: { en: "18 plastic compartments (300 mm width)", vi: "18 ô nhựa (rộng 300 mm)" } },
          { label: { en: "Corner panels", vi: "Tấm chắn góc" }, value: { en: "Ramps discourage laying outside the nesting boxes", vi: "Tấm dốc hạn chế gà đẻ ở góc ngoài ổ" } },
          { label: { en: "Design", vi: "Cơ chế" }, value: { en: "Roll-away to a central tray", vi: "Trứng tự lăn về khay trung tâm" } },
          { label: { en: "Collection point", vi: "Điểm thu trứng" }, value: { en: "In the maintenance room", vi: "Trong phòng bảo trì" } },
          {
            label: { en: "Benefit", vi: "Lợi ích" },
            value: { en: "No contact with manure, cleaner eggs", vi: "Không tiếp xúc phân, trứng sạch hơn" },
          },
        ],
      },
      {
        title: { en: "Feeding System", vi: "Hệ cấp ăn" },
        rows: [
          { label: { en: "Hopper", vi: "Phễu" }, value: { en: "50-pound closed gravity-fed hopper", vi: "Phễu kín 50 pound (khoảng 22,7 kg), cấp theo trọng lực" } },
          { label: { en: "Feed pipe", vi: "Ống cấp ăn" }, value: { en: "Larger pipe to prevent clogs", vi: "Ống lớn hơn giúp tránh tắc nghẽn" } },
          { label: { en: "Feeding line", vi: "Đường máng" }, value: { en: "Runs the length of the living area", vi: "Chạy dọc khu sống" } },
          {
            label: { en: "Operation", vi: "Vận hành" },
            value: { en: "Low waste, refilled from maintenance room", vi: "Ít hao hụt, tiếp thức từ phòng bảo trì" },
          },
        ],
      },
      {
        title: { en: "Watering System", vi: "Hệ cấp nước" },
        rows: [
          { label: { en: "Reservoir", vi: "Bồn chứa" }, value: { en: "55-gallon (~208 L) drum on stand", vi: "Thùng 55 gallon (~208 L) trên giá" } },
          { label: { en: "Delivery", vi: "Dẫn nước" }, value: { en: "Pipe to nipple-drinker line", vi: "Ống dẫn tới đường núm uống" } },
          { label: { en: "Pressure", vi: "Áp lực" }, value: { en: "Gravity / low-pressure", vi: "Trọng lực / áp suất thấp" } },
          { label: { en: "Water intake", vi: "Đầu cấp nước" }, value: { en: "Threaded male garden-hose connector", vi: "Đầu nối ren ngoài cho vòi tưới vườn" } },
        ],
      },
      {
        title: { en: "Ventilation & Airflow", vi: "Thông gió & luồng khí" },
        rows: [
          { label: { en: "Openings", vi: "Cửa gió" }, value: { en: "High + low louvered vents; 44% more surface area", vi: "Cửa lá sách trên + dưới; diện tích tăng 44%" } },
          { label: { en: "Heat shielding", vi: "Chống nóng" }, value: { en: "3 layers of Kova CN-05 reflective paint", vi: "3 lớp sơn phản xạ nhiệt Kova CN-05" } },
          {
            label: { en: "Principle", vi: "Nguyên lý" },
            value: { en: "Natural convection (hot out high, fresh in low)", vi: "Đối lưu tự nhiên (khí nóng thoát trên, khí tươi vào dưới)" },
          },
          { label: { en: "Louvers", vi: "Lá sách" }, value: { en: "Reduce wind speed and drafts", vi: "Giảm tốc độ gió và gió lùa" } },
        ],
      },
      {
        title: { en: "Lighting & Animal Welfare", vi: "Chiếu sáng & phúc lợi vật nuôi" },
        rows: [
          { label: { en: "Daylight", vi: "Lấy sáng" }, value: { en: "4 polycarbonate openings", vi: "4 ô polycarbonate" } },
          { label: { en: "Chicken door", vi: "Cửa gà" }, value: { en: "Automatic electric + sloped ramp", vi: "Điện tự động + dốc lên" } },
          { label: { en: "Maintenance door", vi: "Cửa bảo trì" }, value: { en: "Large, for human access", vi: "Cỡ lớn cho người ra vào" } },
          { label: { en: "Perches", vi: "Sào đậu" }, value: { en: "Sized for 100 birds", vi: "Đủ cho 100 con" } },
          {
            label: { en: "Protection", vi: "Bảo vệ" },
            value: { en: "Night predator protection; aluminum chick panels", vi: "Chống thú săn ban đêm; tấm nhôm bảo vệ gà con" },
          },
        ],
      },
      {
        title: { en: "Maintenance & Operation", vi: "Bảo trì & vận hành" },
        rows: [
          { label: { en: "Pit", vi: "Hố trùn" }, value: { en: "Self-cleaning, minimal intervention", vi: "Tự làm sạch, ít can thiệp" } },
          { label: { en: "Deep clean", vi: "Vệ sinh sâu" }, value: { en: "Slats removable for inspection", vi: "Sàn lam tháo rời để kiểm tra" } },
          {
            label: { en: "Daily tasks", vi: "Việc hằng ngày" },
            value: { en: "Egg/feed/water from maintenance room", vi: "Thu trứng/tiếp thức/nước từ phòng bảo trì" },
          },
          { label: { en: "Climate", vi: "Khí hậu" }, value: { en: "Tropical and temperate", vi: "Nhiệt đới và ôn đới" } },
        ],
      },
    ],
  },
  details: {
    title: { en: "Full Product Details", vi: "Chi tiết sản phẩm đầy đủ" },
    subtitle: {
      en: "Prototype reference drawings and labelled sections. See the finalized design in the upgrades section above.",
      vi: "Bản vẽ tham khảo và mặt cắt của mẫu thử. Thiết kế hoàn thiện nằm trong phần nâng cấp phía trên.",
    },
    items: [
      { src: "/images/details/detail-floorplan.jpg", caption: { en: "Floor Plan", vi: "Mặt bằng bố trí" } },
      { src: "/images/details/detail-exterior-render.jpg", caption: { en: "Exterior Render", vi: "Phối cảnh ngoại thất" } },
      { src: "/images/details/detail-interior-cutaway.jpg", caption: { en: "Interior Cutaway Renders", vi: "Phối cảnh cắt nội thất" } },
      { src: "/images/details/detail-interior-3d.jpg", caption: { en: "Interior 3D Views", vi: "Phối cảnh nội thất 3D" } },
      { src: "/images/details/detail-section-long.jpg", caption: { en: "Long Section — Nesting & Feeding", vi: "Mặt cắt dọc — ổ đẻ & cấp ăn" } },
      { src: "/images/details/detail-section-ventilation.jpg", caption: { en: "Cross-Section — Ventilation & Insulation", vi: "Mặt cắt ngang — thông gió & cách nhiệt" } },
      { src: "/images/details/detail-section-water.jpg", caption: { en: "Cross-Section — Water & Egg Collection", vi: "Mặt cắt ngang — cấp nước & thu trứng" } },
    ],
  },
  gallery: {
    title: { en: "The Tây Ninh Prototype", vi: "Mẫu chuồng thử nghiệm tại Tây Ninh" },
    items: [
      { src: "/images/exterior-door.jpg", alt: { en: "Stainless maintenance door and automatic chicken doors", vi: "Cửa bảo trì inox và cửa gà tự động" } },
      { src: "/images/exterior-id.jpg", alt: { en: "Recycled 20 ft shipping container body", vi: "Thân container 20 ft tái chế" } },
      { src: "/images/nesting-rollaway.jpg", alt: { en: "Roll-away nesting rows", vi: "Dãy ổ đẻ trứng tự lăn" } },
      { src: "/images/interior-framing.jpg", alt: { en: "Internal wood and steel framing", vi: "Khung gỗ và thép bên trong" } },
      { src: "/images/floor-drinkers.jpg", alt: { en: "Slatted floor with nipple-drinker line", vi: "Sàn lam và đường núm uống" } },
      { src: "/images/vermiculture-pit.jpg", alt: { en: "Egg Collection Box", vi: "Hộp thu trứng" } },
      { src: "/images/feed-hopper.jpg", alt: { en: "Gravity feed hopper", vi: "Phễu cấp ăn trọng lực" } },
    ],
  },
  economics: {
    title: { en: "Show Me The Profit", vi: "Lợi nhuận thực tế" },
    subtitle: {
      en: "What the farmer earns — per hen and per unit.",
      vi: "Người nuôi thu được gì — theo từng con và từng hệ.",
    },
    metrics: [
      { value: "~$3,197", title: { en: "Net profit / unit / year", vi: "Lợi nhuận ròng / hệ / năm" } },
      { value: "~$31.97", title: { en: "Net profit / hen / year", vi: "Lợi nhuận ròng / con / năm" } },
      { value: "18%", title: { en: "Conservative annual ROI estimate", vi: "ROI hằng năm ước tính thận trọng" }, highlight: true },
      { value: "50%+", title: { en: "Feed reduction", vi: "Giảm lượng thức ăn" } },
    ],
  },
  financialModel: {
    title: { en: "Financial Model — Per Hen (Annual)", vi: "Mô hình tài chính — mỗi con gà (theo năm)" },
    note: {
      en: "Annual hen cost is $5 per bird, spreading a $10 purchase over two years. Profit includes a $500 allowance per 100-hen unit for an estimated 30 hours of egg collection per year. The published 18% annual ROI is a conservative estimate. Other labor is site-dependent; results vary with feed costs, egg prices, and pasture conditions.",
      vi: "Chi phí gà hằng năm là $5/con, phân bổ giá mua $10 trong hai năm. Lợi nhuận đã tính $500 cho mỗi hệ 100 gà, tương ứng khoảng 30 giờ thu trứng mỗi năm. ROI hằng năm công bố ở mức 18% là ước tính thận trọng. Các công việc khác tùy điều kiện trang trại; kết quả phụ thuộc giá cám, giá trứng và bãi chăn thả.",
    },
    rows: [
      { label: { en: "Conventional feed / hen / year", vi: "Cám truyền thống / con / năm" }, value: "42 kg" },
      { label: { en: "Chicken Fortress feed / hen / year", vi: "Cám theo Chicken Fortress / con / năm" }, value: "21 kg" },
      { label: { en: "Bulk feed cost (assumption)", vi: "Giá cám (giả định)" }, value: "$0.45 / kg" },
      { label: { en: "Conventional feed cost / hen / year", vi: "Chi phí cám truyền thống / con / năm" }, value: "~$19" },
      { label: { en: "Feed cost / hen / year (after reduction)", vi: "Chi phí cám / con / năm (sau giảm)" }, value: "$9.50" },
      { label: { en: "Hen cost / hen / year", vi: "Chi phí gà / con / năm" }, value: "$5" },
      { label: { en: "Egg-collection labor / hen / year", vi: "Công thu trứng / con / năm" }, value: "$5" },
      { label: { en: "Egg output / hen / year", vi: "Sản lượng trứng / con / năm" }, value: "250" },
      { label: { en: "Egg price / egg (farm-gate)", vi: "Giá mỗi trứng (tại trại)" }, value: "$0.20" },
      { label: { en: "Egg revenue / hen / year", vi: "Doanh thu trứng / con / năm" }, value: "$50" },
      { label: { en: "Castings / hen / year", vi: "Phân trùn / con / năm" }, value: "~4.2 kg" },
      { label: { en: "Castings wholesale price", vi: "Giá sỉ phân trùn" }, value: "$0.35 / kg" },
      { label: { en: "Castings revenue / hen / year", vi: "Doanh thu phân trùn / con / năm" }, value: "$1.47" },
      { label: { en: "Total revenue / hen / year", vi: "Tổng doanh thu / con / năm" }, value: "~$51.47" },
      { label: { en: "Net profit / hen / year", vi: "Lợi nhuận ròng / con / năm" }, value: "~$31.97" },
      { label: { en: "Net profit / unit / year (100 hens)", vi: "Lợi nhuận ròng / hệ / năm (100 con gà)" }, value: "~$3,197" },
    ],
    labor: {
      title: { en: "Egg-collection labor — 100-hen unit", vi: "Công thu trứng — hệ 100 gà" },
      note: { en: "Collection takes about 10 minutes, three times per week: approximately 26 hours over 52 weeks. The model rounds this allowance to 30 hours and budgets $500 per year.", vi: "Thu trứng khoảng 10 phút mỗi lần, ba lần mỗi tuần: khoảng 26 giờ trong 52 tuần. Mô hình làm tròn dự toán thời gian lên 30 giờ và tính $500 mỗi năm." },
      rows: [
        { label: { en: "Estimated annual collection hours", vi: "Giờ thu trứng dự toán mỗi năm" }, value: "~30" },
        { label: { en: "Annual labor allowance / unit", vi: "Dự toán tiền công / hệ / năm" }, value: "$500" },
      ],
    },
  },
  faq: {
    title: { en: "Frequently Asked Questions", vi: "Câu hỏi thường gặp" },
    items: [
      {
        question: { en: "How are payments handled?", vi: "Thanh toán được thực hiện như thế nào?" },
        answer: { en: "We currently accept payment only through licensed third-party escrow services. They release your deposit to us once we provide proof of delivery. We pay all escrow fees.", vi: "Hiện chúng tôi chỉ nhận thanh toán qua dịch vụ ký quỹ của bên thứ ba được cấp phép. Tiền đặt cọc được giải ngân cho chúng tôi khi có bằng chứng giao hàng. Chúng tôi thanh toán toàn bộ phí ký quỹ." },
      },
      {
        question: { en: "Where do the worm castings come from?", vi: "Phân trùn được tạo ra từ đâu?" },
        answer: { en: "Worms and native insects process chicken manure into castings. Roughly half the manure comes from supplemental feed and half from hens foraging insects on the land. The model estimates 4.2 kg of castings per hen per year.", vi: "Trùn và côn trùng bản địa xử lý phân gà thành phân trùn. Khoảng một nửa lượng phân đến từ thức ăn bổ sung và một nửa từ côn trùng gà tự kiếm trên bãi chăn thả. Mô hình ước tính 4,2 kg phân trùn mỗi con gà mỗi năm." },
      },
      {
        question: { en: "Why is it called a Chicken Fortress?", vi: "Vì sao có tên Chicken Fortress?" },
        answer: { en: "It is a steel box with strong heat shielding, a 55-gallon water drum, a 50-pound feed hopper, and a vermiculture pit that turns manure into protein for the chickens — built to keep the flock supplied and protected.", vi: "Đó là một hộp thép có khả năng chống nóng, thùng nước 55 gallon, phễu thức ăn 50 pound và hố nuôi trùn biến phân thành nguồn đạm cho gà — được thiết kế để cung cấp nhu yếu phẩm và bảo vệ đàn gà." },
      },
      {
        question: { en: "Can I lock the doors and use it as a self-cleaning battery cage?", vi: "Có thể khóa cửa và dùng như chuồng nhốt tự làm sạch không?" },
        answer: { en: "No. The automatic doors sit in the corners so hens nest on the opposite wall. When those doors are locked closed, the corners become attractive nesting spots and eggs can no longer all be collected from the maintenance room. The system is designed for daytime pasture access.", vi: "Không. Cửa tự động được đặt ở góc để gà làm ổ ở tường đối diện. Khi khóa cửa đóng kín, các góc trở thành nơi đẻ ưa thích và không thể thu toàn bộ trứng từ phòng bảo trì. Hệ được thiết kế để gà ra bãi chăn thả ban ngày." },
      },
      {
        question: { en: "What does the temperature test show?", vi: "Thử nghiệm nhiệt độ cho thấy điều gì?" },
        answer: { en: "The prototype test describes 8 hours in July sun with two coats of reflective paint and passive airflow. Ground-level readings were 35.7°C for the control and 36.3°C inside the Fortress, a 0.6°C difference. Kova's 90% heat-reflection claim applies to two coats. The finalized design uses three coats and is expected to perform better than the prototype in the linked video.", vi: "Mẫu thử được đặt 8 giờ dưới nắng tháng 7 với hai lớp sơn phản xạ nhiệt và đối lưu tự nhiên. Nhiệt độ sát mặt đất là 35,7°C tại nhóm đối chứng và 36,3°C trong Fortress, chênh lệch 0,6°C. Công bố phản xạ nhiệt 90% của Kova áp dụng cho hai lớp sơn. Thiết kế hoàn thiện dùng ba lớp và được kỳ vọng hiệu quả hơn mẫu thử trong video." },
      },
      {
        question: { en: "How do I get started?", vi: "Bắt đầu như thế nào?" },
        answer: { en: "Email us for pricing, site suitability, delivery, and escrow arrangements. Shipping is included. The unit arrives fully ready to use: place it on four cinder blocks, with no installation needed. Chickens are not included due to import restrictions.", vi: "Gửi email để nhận giá bán và trao đổi về địa điểm, giao hàng và ký quỹ. Giá đã bao gồm vận chuyển. Chuồng được giao hoàn thiện: đặt lên bốn khối gạch bê tông kê đỡ, không cần lắp đặt. Không kèm gà do hạn chế nhập khẩu." },
      },
    ],
  },
  contact: {
    email: "Kimvgordon@protonmail.com",
    title: { en: "Built for profit. Designed for reality.", vi: "Tạo lợi nhuận. Phù hợp thực tế." },
    body: { en: "Email us for pricing, site suitability, and escrow arrangements. Shipping is included and the unit arrives fully ready to use. Place it on four cinder blocks; no installation needed. Chickens are not included due to import restrictions.", vi: "Gửi email để nhận giá bán và trao đổi về địa điểm, phương án ký quỹ. Giá đã bao gồm vận chuyển, chuồng được giao hoàn thiện. Đặt lên bốn khối gạch bê tông kê đỡ, không cần lắp đặt. Không kèm gà do hạn chế nhập khẩu." },
    cta: { en: "Email Kim & Gordon", vi: "Gửi email cho Kim & Gordon" },
  },
  footer: {
    tagline: {
      en: "A recycled shipping container converted into a minimal-odor, double-revenue poultry system by Công Ty Kim Và Gordon (Tây Ninh, Vietnam).",
      vi: "Container tái chế chuyển đổi thành hệ nuôi gà giảm thiểu mùi, hai nguồn doanh thu bởi Công Ty Kim Và Gordon (Tây Ninh, Việt Nam).",
    },
    subtagline: {
      en: "The Chicken Fortress: 100-hen systems with a 6-day waste-to-feed loop and daytime pasture access.",
      vi: "The Chicken Fortress: hệ 100 con gà mái đẻ với vòng tuần hoàn phân → đạm 6 ngày và ra bãi ban ngày.",
    },
    quickLinks: { en: "Quick Links", vi: "Liên kết nhanh" },
    links: {
      overview: { en: "Overview", vi: "Tổng quan" },
      product: { en: "Product", vi: "Sản phẩm" },
      features: { en: "Features", vi: "Tính năng" },
      specs: { en: "Specs", vi: "Thông số" },
      details: { en: "Details", vi: "Chi tiết" },
      gallery: { en: "Gallery", vi: "Hình ảnh" },
      faq: { en: "FAQ & Contact", vi: "Hỏi đáp & Liên hệ" },
    },
    language: { en: "Language", vi: "Ngôn ngữ" },
    copyright: "© 2026 Công Ty Kim Và Gordon. All rights reserved.",
  },
} as const;
