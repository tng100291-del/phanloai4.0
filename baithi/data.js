const FRUIT_DATA = {
    // ================= TRÁI CÂY (FRUITS) =================
    "Chuối": {
        stage_model_path: "./my_model/stages/chuoi_model/",
        general_nutrition: [
            "**Năng lượng:** 89 kcal/100g – Cung cấp năng lượng tức thì.",
            "**Kali (Potassium):** 358mg (9% DV) – Tốt cho huyết áp và tim mạch.",
            "**Vitamin B6:** 0.4mg (31% DV) – Hỗ trợ chuyển hóa và hệ thần kinh.",
            "**Chất xơ:** 2.6g – Hỗ trợ tiêu hóa, ngăn ngừa táo bón.",
            "**Lợi ích:** Giảm chuột rút cơ bắp, cải thiện tâm trạng nhờ Tryptophan."
        ],
        classes: {
            "Chuối Xanh Đậm": { display_name: "Xanh (Sống)", note: "Vị chát, nhiều tinh bột kháng (tốt cho ruột). Cần 5-7 ngày để chín." },
            "Chuối Xanh Vàng": { display_name: "Gần Chín", note: "Bắt đầu chuyển hóa đường. Để nhiệt độ phòng 2-3 ngày." },
            "Chuối Vàng Đều": { display_name: "Chín Hoàn Hảo", note: "Lượng chất chống oxy hóa cao nhất. Ngọt và thơm. Ăn ngay!" },
            "Chuối Nám Đen": { display_name: "Quá Chín", note: "Thịt mềm nhũn, lượng đường cao nhất. Tuyệt vời để làm bánh chuối." }
        }
    },
    "Xoài": {
        stage_model_path: "./my_model/stages/xoai_model/",
        general_nutrition: [
            "**Vitamin C:** 36.4mg (60% DV) – Tăng cường hệ miễn dịch mạnh mẽ.",
            "**Vitamin A:** 1082 IU – Cực tốt cho thị lực và làn da.",
            "**Folate (B9):** 43µg – Quan trọng cho tạo máu.",
            "**Chất chống oxy hóa:** Zeaxanthin và Lutein bảo vệ mắt.",
            "**Enzyme:** Chứa Amylase giúp phân giải tinh bột, hỗ trợ tiêu hóa."
        ],
        classes: {
            "Xoài Xanh Sống": { display_name: "Xanh (Chua)", note: "Rất chua, giòn, nhiều Vitamin C. Thường dùng làm gỏi/nộm." },
            "Xoài Chín Hơi Xanh": { display_name: "Gần Chín", note: "Bắt đầu ngọt, còn giòn. Để thêm 1-2 ngày." },
            "Xoài Chín Vàng": { display_name: "Chín Ngọt", note: "Thơm lừng, ngọt đậm, thịt mềm. Ăn ngon nhất lúc này." },
            "Xoài Quá Chín": { display_name: "Quá Chín", note: "Thịt nhũn, mùi men rượu. Chỉ nên dùng làm sinh tố." }
        }
    },
    "Thanh Long": {
        stage_model_path: "./my_model/stages/thanhlong_model/",
        general_nutrition: [
            "**Calo thấp:** Chỉ 60 kcal/100g – Lý tưởng để giảm cân.",
            "**Sắt:** 0.74mg (9% DV) – Cần thiết cho máu (hiếm có trong trái cây).",
            "**Magie:** 40mg (10% DV) – Tốt cho xương và cơ bắp.",
            "**Chất xơ:** 3g – Rất cao, hỗ trợ hệ tiêu hóa khỏe mạnh.",
            "**Hạt:** Chứa axit béo Omega-3 và Omega-9 tốt cho tim."
        ],
        classes: {
            "Thanh Long Xanh": { display_name: "Xanh", note: "Vỏ xanh hoàn toàn, chưa có vị ngọt." },
            "Thanh Long Chín Tới": { display_name: "Gần Chín", note: "Vỏ chuyển hồng, tai còn xanh cứng." },
            "Thanh Long Chín Đỏ": { display_name: "Chín Đỏ", note: "Vỏ đỏ đều, căng mọng. Ngọt mát và nhiều nước." },
            "Thanh Long Héo": { display_name: "Héo/Hỏng", note: "Vỏ nhăn nheo, tai khô quắt. Chất lượng giảm sút." }
        }
    },
    "Táo": {
        stage_model_path: "./my_model/stages/tao_model/",
        general_nutrition: [
            "**Pectin:** Một loại chất xơ hòa tan giúp giảm Cholesterol xấu.",
            "**Vitamin C:** 4.6mg – Tăng đề kháng.",
            "**Quercetin:** Chất chống oxy hóa mạnh, giảm viêm và dị ứng.",
            "**Nước:** 86% – Giúp cấp nước cho cơ thể.",
            "**Lợi ích:** Tốt cho phổi, tim mạch và kiểm soát cân nặng."
        ],
        classes: {
            "Táo Xanh/Non": { display_name: "Xanh/Chua", note: "Rất cứng, vị chua gắt, ít đường." },
            "Táo Chín Tới": { display_name: "Giòn", note: "Độ giòn cao nhất, chua ngọt cân bằng." },
            "Táo Chín Đỏ": { display_name: "Chín Ngọt", note: "Màu đỏ đẹp, ngọt đậm, hương thơm rõ rệt." },
            "Táo Héo/Nâu": { display_name: "Héo/Bột", note: "Vỏ nhăn, thịt bị xốp (bột). Nên dùng ép nước." }
        }
    },
    "Ổi": {
        stage_model_path: "./my_model/stages/oi_model/",
        general_nutrition: [
            "**Vitamin C:** 228mg (380% DV) – Gấp 4 lần cam! Vua Vitamin C.",
            "**Chất xơ:** 5.4g – Rất cao, hỗ trợ nhuận tràng.",
            "**Kali:** 417mg – Ngang ngửa chuối, tốt cho huyết áp.",
            "**Đường huyết:** Chỉ số GI thấp, tốt cho người tiểu đường.",
            "**Folate:** Hỗ trợ sản xuất tế bào hồng cầu."
        ],
        classes: {
            "Ổi Xanh Cứng": { display_name: "Xanh Cứng", note: "Vị chát (tanin), rất cứng. Có thể gây táo bón." },
            "Ổi Giòn": { display_name: "Chín Giòn", note: "Giòn tan, ngọt nhẹ, vỏ sáng màu. Ăn ngon nhất." },
            "Ổi Chín Mềm": { display_name: "Chín Mềm", note: "Thịt mềm, thơm nồng nàn, ruột mềm." },
            "Ổi Hư": { display_name: "Hư Hỏng", note: "Bị dập nát, thâm đen hoặc có dòi." }
        }
    },
    "Dưa Hấu": {
        stage_model_path: "./my_model/stages/duahau_model/",
        general_nutrition: [
            "**Nước:** 92% – Giải nhiệt và bù nước cực tốt.",
            "**Lycopene:** Sắc tố đỏ giúp chống ung thư và bảo vệ tim.",
            "**Citrulline:** Axit amin giúp giảm đau nhức cơ bắp.",
            "**Vitamin A & C:** Hỗ trợ làn da và tóc khỏe mạnh.",
            "**Calo:** Chỉ 30 kcal/100g – Ăn no không lo béo."
        ],
        classes: {
            "Dưa Hấu Non": { display_name: "Non/Nhạt", note: "Vỗ nghe tiếng đanh, cuống còn xanh. Ruột nhạt màu." },
            "Dưa Hấu Chín": { display_name: "Chín Đỏ", note: "Vỗ nghe tiếng 'bộp bộp', cuống héo khô. Ruột đỏ ngọt." },
            "Dưa Hấu Hỏng": { display_name: "Úng/Hỏng", note: "Vỏ mềm nhũn, chảy nước chua hoặc có mùi lạ." }
        }
    },
    "Đu Đủ": {
        stage_model_path: "./my_model/stages/dudu_model/",
        general_nutrition: [
            "**Papain:** Enzyme đặc biệt giúp tiêu hóa protein thịt cá.",
            "**Vitamin C:** 60.9mg (101% DV) – Tăng cường miễn dịch.",
            "**Beta-Carotene:** Tiền chất Vitamin A, chống khô mắt.",
            "**Folate:** Tốt cho tim mạch và tế bào.",
            "**Lợi ích:** Nhuận tràng, làm đẹp da, giảm viêm."
        ],
        classes: {
            "Đu Đủ Xanh": { display_name: "Xanh", note: "Cứng, nhựa trắng nhiều. Chỉ dùng nấu canh hoặc làm nộm." },
            "Đu Đủ Hườm": { display_name: "Hườm", note: "Vỏ có vệt vàng. Để 1-2 ngày nữa là ăn được." },
            "Đu Đủ Chín": { display_name: "Chín Vàng", note: "Vỏ vàng đều, mềm tay. Ngọt đậm và bổ dưỡng nhất." },
            "Đu Đủ Nẫu": { display_name: "Nẫu/Hỏng", note: "Mềm nhũn, có mùi ủng/lên men." }
        }
    },
    "Cam": {
        stage_model_path: "./my_model/stages/cam_model/",
        general_nutrition: [
            "**Vitamin C:** 53.2mg (88% DV) – Chống cảm cúm, đẹp da.",
            "**Hesperidin:** Flavonoid giúp mạch máu khỏe mạnh.",
            "**Citrate:** Giúp ngăn ngừa sỏi thận.",
            "**Chất xơ:** 2.4g – Kiểm soát đường huyết.",
            "**Kali:** Tốt cho chức năng tim."
        ],
        classes: {
            "Cam Xanh": { display_name: "Xanh (Chua)", note: "Vỏ dày, tinh dầu nhiều, vị chua gắt." },
            "Cam Chín Vàng": { display_name: "Chín Mọng", note: "Vỏ mỏng, vàng óng, mọng nước, ngọt thanh." },
            "Cam Héo/Hỏng": { display_name: "Héo/Khô", note: "Vỏ khô quắt, múi bên trong bị khô (sượng)." }
        }
    },
    "Dâu": {
        stage_model_path: "./my_model/stages/dau_model/",
        general_nutrition: [
            "**Chất chống oxy hóa:** Anthocyanin (màu đỏ) bảo vệ tim.",
            "**Vitamin C:** 58.8mg (98% DV) – Cao hơn cả cam tính theo trọng lượng.",
            "**Mangan:** Hỗ trợ xương và chuyển hóa.",
            "**Chỉ số GI thấp:** 40 – An toàn cho người tiểu đường.",
            "**Axit Ellagic:** Có khả năng ngăn ngừa tế bào ung thư."
        ],
        classes: {
            "Dâu Trắng": { display_name: "Xanh/Trắng", note: "Cứng, vị chua, chưa có hương thơm." },
            "Dâu Hồng": { display_name: "Hồng", note: "Bắt đầu có vị ngọt, còn hơi cứng." },
            "Dâu Đỏ Mọng": { display_name: "Chín Đỏ", note: "Đỏ rực toàn thân, thơm lừng, ngọt nhất." },
            "Dâu Mốc": { display_name: "Mốc/Hỏng", note: "Bị nhũn, chảy nước hoặc có lớp nấm mốc trắng/xám." }
        }
    },
    "Nho": {
        stage_model_path: "./my_model/stages/nho_model/",
        general_nutrition: [
            "**Resveratrol:** (Trong vỏ nho đỏ/đen) Chống lão hóa, tốt cho tim.",
            "**Vitamin K:** 14.6µg – Quan trọng cho đông máu và xương.",
            "**Đường tự nhiên:** Cung cấp năng lượng nhanh.",
            "**Nước:** 81% – Giữ ẩm cho cơ thể.",
            "**Kali:** Giúp cân bằng huyết áp."
        ],
        classes: {
            "Nho Xanh/Chua": { display_name: "Chua/Cứng", note: "Chưa đủ độ đường, vị chát, vỏ dày." },
            "Nho Chín": { display_name: "Chín Ngọt", note: "Căng mọng, có lớp phấn trắng tự nhiên, vị ngọt." },
            "Nho Héo/Rụng": { display_name: "Héo/Rụng", note: "Cuống khô nâu, quả nhăn nheo hoặc rụng rời khỏi cành." }
        }
    },
    "Vải": {
        stage_model_path: "./my_model/stages/vai_model/",
        general_nutrition: [
            "**Vitamin C:** 71.5mg (119% DV) – Tăng đề kháng cực tốt.",
            "**Polyphenol:** Oligonol giúp cải thiện lưu thông máu.",
            "**Đường:** Cao (15g/100g) – Cung cấp năng lượng mạnh.",
            "**Đồng & Kali:** Tốt cho tim mạch.",
            "**Lưu ý:** Tính nóng, không nên ăn quá nhiều khi đói."
        ],
        classes: {
            "Vải Xanh": { display_name: "Chưa Chín", note: "Vỏ còn xanh hoặc hồng nhạt, vị chua chát." },
            "Vải Chín Đỏ": { display_name: "Chín Đỏ", note: "Vỏ đỏ hồng, căng tròn, gai nhẵn. Ngọt và nhiều nước." },
            "Vải Khô Héo": { display_name: "Khô/Hỏng", note: "Vỏ nâu thẫm, khô cứng, có mùi men rượu (lên men)." }
        }
    },
    "Mận": {
        stage_model_path: "./my_model/stages/man_model/",
        general_nutrition: [
            "**Sorbitol:** Hợp chất giúp nhuận tràng tự nhiên.",
            "**Chất chống oxy hóa:** Polyphenol cao gấp 2 lần trái cây khác.",
            "**Vitamin K:** Tốt cho xương.",
            "**Vitamin C:** Bảo vệ tế bào.",
            "**Lợi ích:** Hỗ trợ hấp thu sắt, cải thiện trí nhớ."
        ],
        classes: {
            "Mận Xanh": { display_name: "Xanh (Chát)", note: "Rất cứng, vị chua chát, giòn." },
            "Mận Hườm": { display_name: "Hườm", note: "Vỏ ngả đỏ, ăn giòn, chua ngọt." },
            "Mận Chín Đỏ": { display_name: "Chín Mọng", note: "Vỏ đỏ tím, mềm tay, ngọt đậm, nhiều nước." },
            "Mận Nẫu": { display_name: "Nẫu/Hỏng", note: "Quá mềm, chảy nước, bị nứt vỏ." }
        }
    },
    "Roi": {
        stage_model_path: "./my_model/stages/roi_model/",
        general_nutrition: [
            "**Nước:** 93% – Giải khát tuyệt vời.",
            "**Calo thấp:** 25 kcal/100g – Hỗ trợ giảm cân hiệu quả.",
            "**Vitamin C:** Tăng sức đề kháng.",
            "**Vitamin A:** Tốt cho mắt.",
            "**Lợi ích:** Thanh nhiệt, giải độc, lợi tiểu."
        ],
        classes: {
            "Roi Non": { display_name: "Non/Nhạt", note: "Màu nhạt, vị chát, ít nước." },
            "Roi Tới": { display_name: "Vừa Chín", note: "Giòn, chua nhẹ, bắt đầu ngọt." },
            "Roi Chín Đỏ": { display_name: "Chín Mọng", note: "Màu đậm, da căng bóng, ngọt và nhiều nước nhất." },
            "Roi Sâu/Hỏng": { display_name: "Sâu/Hỏng", note: "Bị mềm, thâm tím hoặc có lỗ sâu đục." }
        }
    },
    "Khế": {
        stage_model_path: "./my_model/stages/khe_model/",
        general_nutrition: [
            "**Vitamin C:** 34.4mg (57% DV).",
            "**Chất xơ:** Hỗ trợ tiêu hóa.",
            "**Đặc biệt:** Kháng khuẩn, tiêu viêm, trị ho.",
            "**Lưu ý:** Chứa Axit Oxalic – Người bị bệnh thận nên hạn chế.",
            "**Calo:** Rất thấp (31 kcal)."
        ],
        classes: {
            "Khế Xanh": { display_name: "Xanh (Chua)", note: "Màu xanh đậm, vị chua gắt. Dùng nấu canh chua." },
            "Khế Vàng": { display_name: "Chín Vàng", note: "Màu vàng cam, mọng nước, viền cánh sẫm. Ăn ngọt." },
            "Khế Héo": { display_name: "Héo/Hư", note: "Mềm nhũn, thâm đen ở cạnh, mất nước." }
        }
    },
    "Chanh": {
        stage_model_path: "./my_model/stages/chanh_model/",
        general_nutrition: [
            "**Vitamin C:** Rất cao – Tăng đề kháng, giải cảm.",
            "**Axit Citric:** Ngăn ngừa sỏi thận, hỗ trợ tiêu hóa.",
            "**Flavonoid:** Kháng viêm, chống oxy hóa.",
            "**Pectin (trong vỏ):** Giúp giảm cảm giác thèm ăn.",
            "**Lợi ích:** Thanh lọc cơ thể (Detox), cân bằng pH."
        ],
        classes: {
            "Chanh Non": { display_name: "Non/Khô", note: "Vỏ dày, sần sùi, rất ít nước." },
            "Chanh Xanh": { display_name: "Tươi Tốt", note: "Vỏ mỏng, căng bóng, mọng nước, mùi thơm đặc trưng." },
            "Chanh Héo": { display_name: "Héo/Vàng", note: "Vỏ vàng ố, khô cứng, nước bị đắng." }
        }
    },
    "Chanh Dây": {
        stage_model_path: "./my_model/stages/chanhday_model/",
        general_nutrition: [
            "**Chất xơ:** 10.4g (Cực cao) – Quét sạch đường ruột.",
            "**Vitamin A:** 1272 IU – Tốt cho mắt và da.",
            "**Sắt & Kali:** Tốt cho máu và tim mạch.",
            "**Vitamin C:** 30mg – Tăng miễn dịch.",
            "**Lợi ích:** An thần, giúp ngủ ngon (nhờ alkaloid)."
        ],
        classes: {
            "Chanh Dây Xanh": { display_name: "Xanh/Trơn", note: "Vỏ trơn bóng, màu xanh/tím nhạt. Vị rất chua." },
            "Chanh Dây Hơi Nhăn": { display_name: "Chín (Vỏ Nhăn)", note: "Vỏ tím sẫm, hơi nhăn nheo. Đây là lúc ngọt và thơm nhất!" },
            "Chanh Dây Khô": { display_name: "Khô Quắt", note: "Vỏ khô cứng như đá, ruột bên trong bị khô." }
        }
    },
    "Thơm": {
        stage_model_path: "./my_model/stages/thom_model/",
        general_nutrition: [
            "**Bromelain:** Enzyme quý giúp tiêu hóa đạm, giảm sưng viêm.",
            "**Vitamin C:** 47.8mg (80% DV) – Tăng sức đề kháng.",
            "**Mangan:** 0.9mg (46% DV) – Tốt cho xương và chuyển hóa.",
            "**Chất xơ:** Tốt cho ruột.",
            "**Lợi ích:** Giảm ho, làm sạch phổi, hỗ trợ phục hồi sau mổ."
        ],
        classes: {
            "Thơm Xanh": { display_name: "Xanh", note: "Mắt thơm còn xanh, cứng, rất chua. Chưa ăn được." },
            "Thơm Ương": { display_name: "Ương", note: "Gốc vàng, ngọn xanh. Chua chua ngọt ngọt." },
            "Thơm Chín Vàng": { display_name: "Chín Vàng", note: "Vàng đều toàn thân, mùi thơm nồng. Ngọt đậm." },
            "Thơm Ủng": { display_name: "Ủng/Men", note: "Mùi nồng như rượu (lên men), thịt mềm nhũn, chảy nước." }
        }
    },

    // ================= RAU CỦ (VEGETABLES) =================
    "Hành Tím": {
        stage_model_path: "./my_model/stages/hanhtim_model/",
        general_nutrition: [
            "**Quercetin:** Chất chống oxy hóa mạnh, kháng viêm, chống ung thư.",
            "**Allicin:** Kháng sinh tự nhiên, diệt khuẩn.",
            "**Lưu huỳnh:** Tốt cho gan và giải độc.",
            "**Chất xơ:** Prebiotic nuôi lợi khuẩn đường ruột.",
            "**Sắt:** Hỗ trợ tạo máu."
        ],
        classes: {
            "Hành Tím Tươi": { display_name: "Tươi Tốt", note: "Củ cứng, vỏ khô, màu tím đẹp, không mọc mầm." },
            "Hành Tím Mọc Mầm": { display_name: "Mọc Mầm", note: "Đã mọc mầm xanh. Dinh dưỡng trong củ giảm, xốp hơn." },
            "Hành Tím Hỏng": { display_name: "Hư/Thối", note: "Mềm nhũn, chảy nước, có mốc đen. Phải bỏ đi." }
        }
    },
    "Tỏi": {
        stage_model_path: "./my_model/stages/toi_model/",
        general_nutrition: [
            "**Allicin:** 'Thần dược' tăng đề kháng, trị cảm cúm.",
            "**Mangan & Vitamin B6:** Hỗ trợ chức năng não và thần kinh.",
            "**Selenium:** Chống oxy hóa, bảo vệ tim.",
            "**Lợi ích:** Hạ huyết áp, giảm cholesterol xấu.",
            "**Lưu ý:** Nên đập dập và để 10 phút trước khi nấu để kích hoạt Allicin."
        ],
        classes: {
            "Tỏi Khô Tốt": { display_name: "Tươi/Khô", note: "Tép tỏi cứng, vỏ trắng khô, không óp." },
            "Tỏi Mọc Mầm": { display_name: "Mọc Mầm", note: "Mầm xanh nhú ra. Vẫn ăn được nhưng kém thơm, củ bắt đầu teo." },
            "Tỏi Hỏng": { display_name: "Mốc/Ốp", note: "Tép tỏi bị teo nhỏ (ốp), mềm nhũn hoặc mốc đen." }
        }
    },
    "Cà Rốt": {
        stage_model_path: "./my_model/stages/carot_model/",
        general_nutrition: [
            "**Beta-Carotene:** Chuyển hóa thành Vitamin A, giúp sáng mắt.",
            "**Lutein:** Bảo vệ võng mạc khỏi ánh sáng xanh.",
            "**Biotin:** Vitamin H giúp tóc và móng khỏe mạnh.",
            "**Vitamin K1:** Quan trọng cho sức khỏe xương.",
            "**Lợi ích:** Tốt cho mắt, da và hệ miễn dịch."
        ],
        classes: {
            "Cà Rốt Tươi": { display_name: "Tươi Cứng", note: "Củ cứng, màu cam đậm, vỏ nhẵn, không nứt." },
            "Cà Rốt Héo": { display_name: "Héo Mềm", note: "Củ mềm dẻo, vỏ nhăn nheo. Vẫn ăn được nhưng mất nước." },
            "Cà Rốt Hư": { display_name: "Thối/Nhũn", note: "Bị mềm nhũn, chảy nước nhớt, có mùi hôi." }
        }
    },
    "Cà Chua": {
        stage_model_path: "./my_model/stages/cachua_model/",
        general_nutrition: [
            "**Lycopene:** Chất chống oxy hóa đỏ, bảo vệ tim và da.",
            "**Vitamin C:** 13.7mg – Tăng đề kháng.",
            "**Vitamin K:** Tốt cho xương.",
            "**Folate:** Cần thiết cho tế bào.",
            "**Lưu ý:** Nấu chín cà chua giúp cơ thể hấp thu Lycopene tốt hơn."
        ],
        classes: {
            "Cà Chua Xanh": { display_name: "Xanh", note: "Cứng, vị chát, chứa Tomatine (độc nhẹ). Chỉ dùng nấu món cụ thể." },
            "Cà Chua Ương": { display_name: "Ương (Hồng)", note: "Bắt đầu chuyển hồng. Để 1 ngày nữa là chín." },
            "Cà Chua Chín Đỏ": { display_name: "Chín Đỏ", note: "Đỏ đều, căng mọng. Dinh dưỡng cao nhất." },
            "Cà Chua Nẫu": { display_name: "Nẫu/Hỏng", note: "Vỏ nhăn, mềm nhũn, chảy nước, có mùi chua." }
        }
    },
    "Dưa Leo": {
        stage_model_path: "./my_model/stages/dualeo_model/",
        general_nutrition: [
            "**Nước:** 96% – Cấp nước và thanh nhiệt số 1.",
            "**Vitamin K:** 16% DV – Tốt cho đông máu.",
            "**Cucurbitacin:** Vị đắng nhẹ (ở đầu) có tính kháng viêm.",
            "**Calo:** Cực thấp (15 kcal/100g) – Ăn thoải mái.",
            "**Lợi ích:** Giảm bọng mắt, làm đẹp da, hỗ trợ giảm cân."
        ],
        classes: {
            "Dưa Leo Tươi": { display_name: "Tươi Giòn", note: "Vỏ xanh đậm, gai sần, thân cứng chắc." },
            "Dưa Leo Héo": { display_name: "Héo/Mềm", note: "Đầu quả bị mềm, vỏ nhăn nheo, mất độ giòn." },
            "Dưa Leo Hư": { display_name: "Úng/Vàng", note: "Vỏ chuyển vàng, mềm nhũn, chảy nhớt." }
        }
    },
    "Súp Lơ": {
        stage_model_path: "./my_model/stages/suplo_model/",
        general_nutrition: [
            "**Choline:** Tốt cho não bộ và trí nhớ.",
            "**Sulforaphane:** Hợp chất ngăn ngừa ung thư.",
            "**Chất xơ:** 2g – Tốt cho tiêu hóa.",
            "**Vitamin C:** 48.2mg (80% DV).",
            "**Lợi ích:** Giải độc gan, kháng viêm."
        ],
        classes: {
            "Súp Lơ Tươi": { display_name: "Tươi Trắng", note: "Bông trắng tinh, cứng chắc, khít chặt." },
            "Súp Lơ Héo": { display_name: "Héo/Vàng", note: "Mặt bông ngả vàng, xuất hiện khe hở, hơi mềm." },
            "Súp Lơ Hỏng": { display_name: "Mốc/Đen", note: "Có đốm đen mốc, mềm nhũn, mùi hôi khó chịu." }
        }
    },
    "Súp Lơ Xanh": {
        stage_model_path: "./my_model/stages/suploxanh_model/",
        general_nutrition: [
            "**Protein:** 2.8g – Cao hơn hầu hết các loại rau khác.",
            "**Vitamin K:** 116% DV – Cực tốt cho xương.",
            "**Vitamin C:** 135% DV – Tăng miễn dịch vượt trội.",
            "**Sulforaphane:** Bảo vệ tế bào khỏi hư hại.",
            "**Lợi ích:** 'Siêu thực phẩm' chống ung thư và lão hóa."
        ],
        classes: {
            "Súp Lơ Xanh Tươi": { display_name: "Tươi Xanh", note: "Bông xanh đậm hoặc tím, khít chặt, cuống cứng." },
            "Súp Lơ Xanh Héo": { display_name: "Héo/Vàng", note: "Bông ngả vàng, nụ hoa bắt đầu nở bung." },
            "Súp Lơ Xanh Hỏng": { display_name: "Nhũn/Mốc", note: "Thân mềm nhũn, có nhớt, mùi hôi." }
        }
    },
    "Cà Tím": {
        stage_model_path: "./my_model/stages/catim_model/",
        general_nutrition: [
            "**Nasunin:** Chất chống oxy hóa tím (ở vỏ) bảo vệ màng tế bào não.",
            "**Chất xơ:** 3g – Hỗ trợ tiêu hóa.",
            "**Kali:** Giúp ổn định nhịp tim.",
            "**Calo thấp:** 25 kcal – Tốt cho người ăn kiêng.",
            "**Lưu ý:** Hấp hoặc nướng giữ dinh dưỡng tốt hơn chiên."
        ],
        classes: {
            "Cà Tím Tươi": { display_name: "Tươi Bóng", note: "Vỏ tím bóng loáng, căng, ấn vào đàn hồi tốt." },
            "Cà Tím Héo": { display_name: "Héo/Mềm", note: "Vỏ nhăn nheo, sờ vào thấy mềm, ấn bị lún." },
            "Cà Tím Hỏng": { display_name: "Thối/Nâu", note: "Có đốm nâu đen, thịt bên trong bị thâm nhũn." }
        }
    },
    "Bí Đỏ": {
        stage_model_path: "./my_model/stages/bido_model/",
        general_nutrition: [
            "**Vitamin A:** 245% DV – Siêu thực phẩm cho mắt.",
            "**Lutein & Zeaxanthin:** Bảo vệ mắt khỏi thoái hóa.",
            "**Vitamin C:** Tăng đề kháng.",
            "**Kali:** Tốt cho người cao huyết áp.",
            "**Hạt bí:** Giàu kẽm và magie, tốt cho nam giới."
        ],
        classes: {
            "Bí Đỏ Tươi Cứng": { display_name: "Tươi Cứng", note: "Vỏ cứng, cuống khô, cầm nặng tay." },
            "Bí Đỏ Hơi Mềm Nứt": { display_name: "Mềm/Nứt", note: "Vỏ mất độ bóng, hơi mềm hoặc có vết nứt nhỏ." },
            "Bí Đỏ Hỏng Nát": { display_name: "Thối/Mốc", note: "Bị mềm nhũn một phần, chảy nước, mốc trắng." }
        }
    },
    "Bí Đao": {
        stage_model_path: "./my_model/stages/bidao_model/",
        general_nutrition: [
            "**Nước:** 96% – Thanh nhiệt, giải độc gan/thận.",
            "**Axit Tartronic:** Ức chế chuyển hóa đường thành mỡ (giảm béo).",
            "**Natri thấp:** Tốt cho người bệnh thận, phù nề.",
            "**Vitamin B2:** Tốt cho mắt và tế bào.",
            "**Lợi ích:** Làm đẹp da, giảm cân, giải khát."
        ],
        classes: {
            "Bí Đao Tươi": { display_name: "Tươi Tốt", note: "Vỏ xanh hoặc có phấn trắng, cứng chắc." },
            "Bí Đao Héo": { display_name: "Héo", note: "Vỏ nhăn nheo, mất nước." },
            "Bí Đao Hỏng": { display_name: "Úng/Thối", note: "Mềm nhũn, ấn vào chảy nước đục." }
        }
    },
    "Xà Lách": {
        stage_model_path: "./my_model/stages/xalach_model/",
        general_nutrition: [
            "**Vitamin K:** Rất cao – Tốt cho xương.",
            "**Vitamin A:** Tốt cho mắt.",
            "**Nước:** 95% – Cấp nước.",
            "**Folate:** Tốt cho tim mạch.",
            "**Lactucarium:** Chất trong nhựa xà lách giúp thư giãn thần kinh."
        ],
        classes: {
            "Xà Lách Tươi": { display_name: "Tươi Xanh", note: "Lá cứng, giòn, màu xanh tươi sáng." },
            "Xà Lách Héo": { display_name: "Héo/Rũ", note: "Lá mềm rũ, mất nước. Có thể hồi phục khi ngâm nước đá." },
            "Xà Lách Hỏng": { display_name: "Úng/Nát", note: "Lá chuyển vàng, chảy nhớt, dập nát." }
        }
    },
    "Bắp Cải": {
        stage_model_path: "./my_model/stages/bapcai_model/",
        general_nutrition: [
            "**Vitamin K:** 85% DV – Quan trọng cho đông máu.",
            "**Vitamin C:** 54% DV – Tăng miễn dịch.",
            "**Chất xơ:** Tốt cho tiêu hóa.",
            "**Anthocyanin:** (Trong bắp cải tím) Chống ung thư.",
            "**Lợi ích:** Chữa lành loét dạ dày (Vitamin U), giảm viêm."
        ],
        classes: {
            "Bắp Cải Tươi Cứng": { display_name: "Tươi Cứng", note: "Búp cuốn chặt, cầm nặng tay, lá ngoài giòn." },
            "Bắp Cải Héo Mềm": { display_name: "Héo/Mềm", note: "Lá bên ngoài bị mềm, búp lỏng lẻo." },
            "Bắp Cải Hỏng Nát": { display_name: "Úng/Nát", note: "Xuất hiện đốm nâu đen, lá nhũn, có mùi hôi." }
        }
    }
};