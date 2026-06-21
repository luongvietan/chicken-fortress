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
      en: "Zero Waste. Zero Odor. Maximum Profit.",
      vi: "Không chất thải. Không mùi. Lợi nhuận tối đa.",
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
    imageAlt: { en: "The Chicken Fortress exterior", vi: "Ngoại thất Chicken Fortress" },
  },
  trust: [
    { icon: "eco", title: { en: "Zero Odor in 6 Days", vi: "Không mùi trong 6 ngày" } },
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
      en: "The Chicken Fortress converts a standard 20 ft shipping container into a self-contained habitat for up to 100 laying hens. Slatted flooring drops manure into a dedicated, epoxy-coated vermiculture pit where worms and native flies consume it in about six days — with zero odor — and mature worms return to the hens as free protein. Timed electric doors provide daytime pasture access for natural foraging.",
      vi: "The Chicken Fortress biến container 20 ft tiêu chuẩn thành môi trường nuôi khép kín cho tối đa 100 con gà mái đẻ. Sàn lam dẫn phân xuống hố nuôi trùn phủ epoxy riêng; trùn và ruồi bản địa xử lý phân trong khoảng sáu ngày — hoàn toàn không mùi — và trùn trưởng thành quay lại làm nguồn đạm miễn phí cho gà. Cửa điện hẹn giờ giúp gà ra bãi tự kiếm ăn ban ngày.",
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
          en: "Optimized for shipping, truck, or rail with minimal on-site installation.",
          vi: "Tối ưu cho vận chuyển đường biển/xe tải/đường sắt, lắp đặt tại chỗ tối giản.",
        },
      },
    ],
  },
  how: {
    title: { en: "Circular Ecosystem Flow", vi: "Quy trình hệ sinh thái tuần hoàn" },
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
      en: "Everything below comes standard — a complete, ready-to-run 100-hen production unit.",
      vi: "Tất cả hạng mục dưới đây đều là tiêu chuẩn — một đơn vị sản xuất 100 con gà hoàn chỉnh, sẵn sàng vận hành.",
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
            value: { en: "Worms + native flies, ~6 days (95%+ vs composting)", vi: "Trùn + ruồi bản địa, ~6 ngày (giảm 95%+ so với ủ phân)" },
          },
          {
            label: { en: "Protein return", vi: "Hoàn đạm" },
            value: { en: "Mature worms spill over (~20% feed replacement)", vi: "Trùn trưởng thành tràn sang (thay ~20% thức ăn)" },
          },
          { label: { en: "Hygiene", vi: "Vệ sinh" }, value: { en: "Epoxy-coated, zero odor", vi: "Phủ epoxy, không mùi" } },
        ],
      },
      {
        title: { en: "Nesting & Egg Collection", vi: "Khu đẻ & thu trứng" },
        rows: [
          { label: { en: "Compartments", vi: "Số ô đẻ" }, value: { en: "18 (300 mm width)", vi: "18 ô (rộng 300 mm)" } },
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
          { label: { en: "Hopper", vi: "Phễu" }, value: { en: "Gravity-fed closed hopper", vi: "Phễu kín cấp theo trọng lực" } },
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
        ],
      },
      {
        title: { en: "Ventilation & Airflow", vi: "Thông gió & luồng khí" },
        rows: [
          { label: { en: "Openings", vi: "Cửa gió" }, value: { en: "High + low louvered vents", vi: "Cửa có lá sách trên + dưới" } },
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
      en: "Blueprints, 3D renders, and labelled section drawings of the Chicken Fortress.",
      vi: "Bản vẽ kỹ thuật, phối cảnh 3D và mặt cắt có chú thích của Chicken Fortress.",
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
    title: { en: "See It Built", vi: "Hình ảnh thực tế" },
    items: [
      { src: "/images/exterior-door.jpg", alt: { en: "Stainless maintenance door and automatic chicken doors", vi: "Cửa bảo trì inox và cửa gà tự động" } },
      { src: "/images/exterior-id.jpg", alt: { en: "Recycled 20 ft shipping container body", vi: "Thân container 20 ft tái chế" } },
      { src: "/images/nesting-rollaway.jpg", alt: { en: "Roll-away nesting rows", vi: "Dãy ổ đẻ trứng tự lăn" } },
      { src: "/images/interior-framing.jpg", alt: { en: "Internal wood and steel framing", vi: "Khung gỗ và thép bên trong" } },
      { src: "/images/floor-drinkers.jpg", alt: { en: "Slatted floor with nipple-drinker line", vi: "Sàn lam và đường núm uống" } },
      { src: "/images/vermiculture-pit.jpg", alt: { en: "Slatted floor over the vermiculture pit", vi: "Sàn lưới phía trên hố trùn quế" } },
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
      { value: "$4,200", title: { en: "Net profit / unit / year", vi: "Lợi nhuận ròng / hệ / năm" } },
      { value: "$42", title: { en: "Net profit / hen / year", vi: "Lợi nhuận ròng / con / năm" } },
      { value: "28%", title: { en: "Annual ROI", vi: "Tỷ suất lợi nhuận / năm" }, highlight: true },
      { value: "50%+", title: { en: "Feed reduction", vi: "Giảm lượng thức ăn" } },
    ],
  },
  financialModel: {
    title: { en: "Financial Model — Per Hen (Annual)", vi: "Mô hình tài chính — mỗi con gà (theo năm)" },
    note: {
      en: "Conservative assumptions; actual performance varies with feed cost, egg price, and pasture conditions.",
      vi: "Các giả định mang tính thận trọng; kết quả thực tế phụ thuộc giá cám, giá trứng và điều kiện chăn thả.",
    },
    rows: [
      { label: { en: "Conventional feed / hen / year", vi: "Cám truyền thống / con / năm" }, value: "42 kg" },
      { label: { en: "Chicken Fortress feed / hen / year", vi: "Cám theo Chicken Fortress / con / năm" }, value: "21 kg" },
      { label: { en: "Bulk feed cost (assumption)", vi: "Giá cám (giả định)" }, value: "$0.45 / kg" },
      { label: { en: "Feed cost / hen / year (after reduction)", vi: "Chi phí cám / con / năm (sau giảm)" }, value: "$9.50" },
      { label: { en: "Hen purchase (one-time)", vi: "Mua gà giống (một lần)" }, value: "$10" },
      { label: { en: "Egg output / hen / year", vi: "Sản lượng trứng / con / năm" }, value: "250 eggs" },
      { label: { en: "Egg price (farm-gate)", vi: "Giá trứng (tại trại)" }, value: "$0.20 / egg" },
      { label: { en: "Castings / hen / year", vi: "Phân trùn / con / năm" }, value: "35 kg" },
      { label: { en: "Castings wholesale price", vi: "Giá sỉ phân trùn" }, value: "$0.35 / kg" },
      { label: { en: "Total revenue / hen / year", vi: "Tổng doanh thu / con / năm" }, value: "~$62" },
      { label: { en: "Net profit / hen / year", vi: "Lợi nhuận ròng / con / năm" }, value: "~$42" },
      { label: { en: "Net profit / unit / year (100 hens)", vi: "Lợi nhuận ròng / hệ / năm (100 con gà)" }, value: "~$4,200" },
    ],
  },
  footer: {
    tagline: {
      en: "A recycled shipping container converted into a zero-odor, double-revenue poultry system by Công Ty Kim Và Gordon (Tây Ninh, Vietnam).",
      vi: "Container tái chế chuyển đổi thành hệ nuôi gà không mùi, hai nguồn doanh thu bởi Công Ty Kim Và Gordon (Tây Ninh, Việt Nam).",
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
    },
    language: { en: "Language", vi: "Ngôn ngữ" },
    copyright: "© 2026 Công Ty Kim Và Gordon. All rights reserved.",
  },
} as const;
