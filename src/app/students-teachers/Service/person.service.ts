import { Injectable } from '@angular/core';
import { Person } from '../../students-teachers/Class/person';
import { ToastrNotifierService } from 'src/app/Notifier/toastr-notifier.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  filter: string = 'student';

  peopleData: Person[] = [
    { name: 'Nguyễn Văn A', address: '123 đường Lê Lai, phường 1, Q. Tân Bình, TP. Hồ Chí Minh', phone: '0999123456', role: 'student', checked: false },
    { name: 'Nguyễn Thị C', address: '789 đường Bạch Đằng, phường Vĩnh Trung, Q. Thanh Khê, TP. Đà Nẵng', phone: '0983123456', role: 'student', checked: false },
    { name: 'Đặng Văn E', address: '456 đường Trần Hưng Đạo, phường Hoàn Kiếm, TP. Hà Nội', phone: '0977123456', role: 'student', checked: false },
    { name: 'Phạm Văn G', address: '123 đường Lạc Long Quân, phường 6, Q. 11, TP. Hồ Chí Minh', phone: '0935123456', role: 'student', checked: false },
    { name: 'Ngô Văn I', address: '789 đường Lê Trọng Tấn, phường Dương Nội, Q. Hà Đông, TP. Hà Nội', phone: '0917123456', role: 'student', checked: false },
    { name: 'Trần Thị L', address: '123 đường Trần Văn On, phường Tân Phú, TP. Đồng Xoài, tỉnh Bình Phước', phone: '0978123456', role: 'student', checked: false },
    { name: 'Lê Văn N', address: '789 đường Tôn Thất Tùng, phường Phạm Đình Hổ, Q. Hai Bà Trưng, TP. Hà Nội', phone: '0961123456', role: 'student', checked: false },
    { name: 'Phạm Như P', address: '123 đường Nguyễn Đình Chiểu, phường 1, Q. 10, TP. Hồ Chí Minh', phone: '0939123456', role: 'student', checked: false },
    { name: 'Nguyễn Thị R', address: '789 đường Lý Thường Kiệt, phường Cái Khế, Q. Ninh Kiều, TP. Cần Thơ', phone: '0982123456', role: 'student', checked: false },
    { name: 'Nguyễn Văn T', address: '123 đường 30/4, phường Xuân Đình, Q. Bắc Từ Liêm, TP. Hà Nội', phone: '0943123456', role: 'student', checked: false },
    { name: 'Trần Thị Bình', address: '56 đường Lý Thường Kiệt, phường 4, q. 3, tp. Hồ Chí Minh', phone: '0918123456', role: 'student', checked: false },
    { name: 'Lê Minh Tâm', address: '78 đường Nguyễn Văn Trỗi, phường 12, q. Phú Nhuận, tp. Hồ Chí Minh', phone: '0909123467', role: 'student', checked: false },
    { name: 'Phạm Văn Tú', address: '98 đường Bạch Đằng, phường 7, q. Tân Bình, tp. Hồ Chí Minh', phone: '0898123458', role: 'student', checked: false },
    { name: 'Trịnh Thị Hương', address: '123 đường Bùi Thị Xuân, phường Bến Thành, q. 1, tp. Hồ Chí Minh', phone: '0912123467', role: 'student', checked: false },
    { name: 'Đặng Minh Tâm', address: '456 đường Trần Hưng Đạo, phường 10, q. 5, tp. Hồ Chí Minh', phone: '0909123456', role: 'student', checked: false },
    { name: 'Nguyễn Thế Anh', address: '789 đường Nguyễn Trãi, phường 8, q. 5, tp. Hồ Chí Minh', phone: '0968123456', role: 'student', checked: false },
    { name: 'Võ Thị Mai', address: '234 đường Hồ Tùng Mậu, phường Bến Nghé, q. 1, tp. Hồ Chí Minh', phone: '0945123456', role: 'student', checked: false },
    { name: 'Hoàng Minh Thu', address: '567 đường Lê Duẩn, phường Bến Thành, q. 1, tp. Hồ Chí Minh', phone: '0939123456', role: 'student', checked: false },
    { name: 'Nguyễn Thùy Linh', address: '789 đường Hai Bà Trưng, phường Bến Nghé, q. 1, tp. Hồ Chí Minh', phone: '0911123456', role: 'student', checked: false },
    { name: 'Lâm Văn Quân', address: '98 đường Nguyễn Thị Minh Khai, phường Bến Nghé, q. 1, tp. Hồ Chí Minh', phone: '0908123467', role: 'student', checked: false },
    { name: 'Lương Thanh Hà', address: '123 đường Phan Xích Long, phường 2, q. Phú Nhuận, tp. Hồ Chí Minh', phone: '0929123456', role: 'student', checked: false },
    { name: 'Phan Thị Thu', address: '456 đường Nguyễn Thị Minh Khai, phường Bến Nghé, q. 1, tp. Hồ Chí Minh', phone: '0908123456', role: 'student', checked: false },
    { name: 'Hồ Minh Nhật', address: '234 đường Hùng Vương, phường Phạm Ngũ Lão, q. 1, tp. Hồ Chí Minh', phone: '0956123456', role: 'student', checked: false },
    { name: 'Nguyễn Thái Hòa', address: '789 đường Võ Văn Tần, phường 5, q. 3, tp. Hồ Chí Minh', phone: '0916123456', role: 'student', checked: false },
    { name: 'Đỗ Minh Thanh', address: '456 đường Bùi Viện, phường Phạm Ngũ Lão, q. 1, tp. Hồ Chí Minh', phone: '0918123456', role: 'student', checked: false },
    { name: 'Trần Ngọc Thắm', address: '98 đường Lê Lợi, phường Bến Thành, q. 1, tp. Hồ Chí Minh', phone: '0989123456', role: 'student', checked: false },
    { name: 'Nguyễn Thị Minh Đức', address: '123 đường Huỳnh Tấn Phát, xã Phú Mỹ, huyện Nhà Bè, tp. Hồ Chí Minh', phone: '0901123456', role: 'student', checked: false },
    { name: 'Trương Thị Lan', address: '456 đường Nguyễn Trãi, phường Phạm Ngũ Lão, q. 1, tp. Hồ Chí Minh', phone: '0939123467', role: 'student', checked: false },
    { name: 'Hà Văn Nam', address: '234 đường Nguyễn Thại Sơn, phường 2, q. Gò Vấp, tp. Hồ Chí Minh', phone: '0945123456', role: 'student', checked: false },
    { name: 'Vương Thanh Tùng', address: '789 đường Lê Văn Sỹ, phường 14, q. Phú Nhuận, tp. Hồ Chí Minh', phone: '0915123456', role: 'student', checked: false },
    { name: 'Ngô Ngọc Hà', address: '456 đường Trần Khắc Chân, phường Tân Định, q. 1, tp. Hồ Chí Minh', phone: '0906123456', role: 'student', checked: false },
    { name: 'Đinh Thị Thúy Nga', address: '98 đường An Dương Vương, phường 8, q. 5, tp. Hồ Chí Minh', phone: '0939123456', role: 'student', checked: false },
    { name: 'Lê Hữu Hòa', address: '123 đường Cách Mạng Tháng Tám, phường 6, q. 3, tp. Hồ Chí Minh', phone: '0925123456', role: 'student', checked: false },
    { name: 'Nguyễn Thị Tuyết', address: '456 đường Cao Thắng, phường 12, q. 10, tp. Hồ Chí Minh', phone: '0907123456', role: 'student', checked: false },
    { name: 'Phạm Thành Phong', address: '789 đường Âu Cơ, phường 14, q. Tân Bình, tp. Hồ Chí Minh', phone: '0917123456', role: 'student', checked: false },
    { name: 'Lê Thanh Duy', address: '234 đường Trương Định, phường Bến Thành, q. 1, tp. Hồ Chí Minh', phone: '0975123467', role: 'student', checked: false },
    { name: 'Trần Văn Hòa', address: '789 đường Điện Biên Phủ, phường 7, q. 3, tp. Hồ Chí Minh', phone: '0912123456', role: 'student', checked: false },
    { name: 'Hà Thị Kiều Trinh', address: '456 đường Lương Định Của, phường An Phú, q. 2, tp. Hồ Chí Minh', phone: '0981123456', role: 'student', checked: false },
    { name: 'Vương Thị Thanh Huyền', address: '123 đường Phan Chu Trinh, phường Nguyễn Thái Bình, q. 1, tp. Hồ Chí Minh', phone: '0969123456', role: 'student', checked: false },
    { name: 'Trần Thanh Bình', address: '98 đường Nguyễn Văn Thủ, phường Đa Kao, q. 1, tp. Hồ Chí Minh', phone: '0978123467', role: 'student', checked: false },

    { name: 'Trần Thị B', address: '456 đường Trần Quang Diệu, phường 4, Q. 3, TP. Hồ Chí Minh', phone: '0918123456', role: 'teacher', checked: false },
    { name: 'Trần Đức D', address: '321 đường Nguyễn Thị Minh Khai, phường Bến Nghé, Q. 1, TP. Hồ Chí Minh', phone: '0905123456', role: 'teacher', checked: false },
    { name: 'Nguyễn Thị F', address: '789 đường Hùng Vương, phường Tân Thành, TP. Phan Thiết, tỉnh Bình Thuận', phone: '0944123456', role: 'teacher', checked: false },
    { name: 'Trần Thị H', address: '456 đường Phạm Ngọc Thạch, phường 6, Q. 3, TP. Hồ Chí Minh', phone: '0926123456', role: 'teacher', checked: false },
    { name: 'Nguyễn Văn K', address: '321 đường Nguyễn Văn Cừ, phường An Hải Đông, Q. Sơn Trà, TP. Đà Nẵng', phone: '0955123456', role: 'teacher', checked: false },
    { name: 'Nguyễn Văn M', address: '456 đường Trần Hữu Dực, phường Nam Từ Liêm, Q. Bắc Từ Liêm, TP. Hà Nội', phone: '0907123456', role: 'teacher', checked: false },
    { name: 'Trần Diễm O', address: '321 đường Hoàng Hoa Thám, phường Lộc Vượng, TP. Nha Trang, tỉnh Khánh Hòa', phone: '0932123456', role: 'teacher', checked: false },
    { name: 'Trịnh Thị U', address: '456 đường Vĩnh Viễn, phường 4, Q. 10, TP. Hồ Chí Minh', phone: '0975123456', role: 'teacher', checked: false },
    { name: 'Lê Văn S', address: '321 đường Hồ Tùng Mậu, phường An Khánh, Q. Ninh Kiều, TP. Cần Thơ', phone: '0992123456', role: 'teacher', checked: false },
    { name: 'Trần Thị Q', address: '456 đường Lý Tự Trọng, phường Bến Thành, Q. 1, TP. Hồ Chí Minh', phone: '0913123456', role: 'teacher', checked: false },
    { name: 'Phạm Thị Minh Châu', address: '123 Lê Lợi, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng', phone: '0909123456', role: 'teacher', checked: false },
    { name: 'Nguyễn Thị Tâm', address: '456 Điện Biên Phủ, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng', phone: '0918126789', role: 'student', checked: false },
    { name: 'Lê Anh Tú', address: '789 Trần Cao Vân, Thanh Khê Tây, Thanh Khê, Đà Nẵng', phone: '0909998887', role: 'teacher', checked: false },
    { name: 'Trần Thị Kim Ngọc', address: '69 Nguyễn Văn Linh, An Khê, Thanh Khê, Đà Nẵng', phone: '0906554321', role: 'student', checked: false },
    { name: 'Phan Anh Dũng', address: '96 Nguyễn Văn Linh, An Khê, Thanh Khê, Đà Nẵng', phone: '0943215678', role: 'teacher', checked: false },
    { name: 'Nguyễn Thị Tuyết Trinh', address: '12 Hải Phòng, Thanh Khê, Đà Nẵng', phone: '0988765432', role: 'student', checked: false },
    { name: 'Phạm Văn Tài', address: '456 Nguyễn Hữu Thọ, Khuê Trung, Cẩm Lệ, Đà Nẵng', phone: '0909887766', role: 'teacher', checked: false },
    { name: 'Võ Thanh Phong', address: '283 Trung Nghĩa, Hoà Minh, Liên Chiểu, Đà Nẵng', phone: '0934422266', role: 'student', checked: false },
    { name: 'Nguyễn Minh Tuấn', address: '166 Hoà Lợi, Hoà Vang, Đà Nẵng', phone: '0901223344', role: 'teacher', checked: false },
    { name: 'Huỳnh Thị Thùy', address: '67 Văn Giả, An Khê, Thanh Khê, Đà Nẵng', phone: '0933123456', role: 'student', checked: false },
    { name: 'Mai Văn Tâm', address: '33 Mỹ An 10, Mỹ An, Ngũ Hành Sơn, Đà Nẵng', phone: '0987123456', role: 'teacher', checked: false },
    { name: 'Trần Thị Bích Trà', address: '457 Trần Cao Vân, Thanh Khê Tây, Thanh Khê, Đà Nẵng', phone: '0909988776', role: 'student', checked: false },
    { name: 'Lê Thị Hoài Thương', address: '268 Đống Đa, Hải Châu 2, Hải Châu, Đà Nẵng', phone: '0908887776', role: 'teacher', checked: false },
    { name: 'Nguyễn Văn Dũng', address: '357 Điện Biên Phủ, An Hải Bắc, Sơn Trà, Đà Nẵng', phone: '0912233445', role: 'student', checked: false },
    { name: 'Vũ Thị Lan', address: '99 Trường Chinh, Hòa Thuận Tây, Hải Châu, Đà Nẵng', phone: '0931002003', role: 'teacher', checked: false },
    { name: 'Phan Thanh Tuấn', address: '13 Tăng Bạt Hổ, An Hải Đông, Sơn Trà, Đà Nẵng', phone: '0907776669', role: 'student', checked: false },
    { name: 'Lê Thị Phương Uyên', address: '46 Điện Biên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng', phone: '0903334445', role: 'teacher', checked: false },
    { name: 'Trương Thị Tuyết', address: '132 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng', phone: '0913123456', role: 'student', checked: false },
    { name: 'Nguyễn Thị Ánh Tuyết', address: '13 Cao Bá Quát, Thạc Gián, Thanh Khê, Đà Nẵng', phone: '0901111222', role: 'teacher', checked: false },
    { name: 'Nguyễn Văn Thanh', address: '170 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng', phone: '0933334445', role: 'student', checked: false },
    { name: 'Trần Đinh Hoàng Long', address: '28 Hoàng Văn Thụ, Phước Ninh, Hải Châu, Đà Nẵng', phone: '0908889996', role: 'teacher', checked: false },
    { name: 'Lê Thị Hồng Nhung', address: '25 Hà Huy Tập, Thanh Khê Nam, Thanh Khê, Đà Nẵng', phone: '0909988776', role: 'student', checked: false },
    { name: 'Phan Trung Kiên', address: '28 Đỗ Thúc Tịnh, Xuân Phú, Huế', phone: '0911112223', role: 'teacher', checked: false },
    { name: 'Trần Thị Hương Ly', address: '110-112 Tôn Đức Thắng, Hòa Minh, Liên Chiểu, Đà Nẵng', phone: '0906789012', role: 'student', checked: false },
    { name: 'Nguyễn Hồng Sơn', address: '12 Hải Phòng, Thanh Khê, Đà Nẵng', phone: '0918123456', role: 'teacher', checked: false },
    { name: 'Ngô Thị Hoàng Lan', address: '268 Nguyễn Văn Thoại, An Hải Bắc, Sơn Trà, Đà Nẵng', phone: '0907123456', role: 'student', checked: false },
    { name: 'Nguyễn Mạnh Dũng', address: '357 Điện Biên Phủ, An Hải Bắc, Sơn Trà, Đà Nẵng', phone: '0915990099', role: 'teacher', checked: false },
    { name: 'Hà Thị Khánh Linh', address: '23 Hòa Bình 1, Hòa Cường Bắc, Hải Châu, Đà Nẵng', phone: '0916123456', role: 'student', checked: false },
    { name: 'Lê Anh Tuấn', address: '431 Điện Biên Phủ, An Hải Đông, Sơn Trà, Đà Nẵng', phone: '0908881234', role: 'teacher', checked: false },
    { name: 'Nguyễn Thị Tú Oanh', address: '101 Nguyễn Văn Linh, An Hải Đông, Sơn Trà, Đà Nẵng', phone: '0919002002', role: 'student', checked: false },
    { name: 'Hoàng Thị Kim Dung', address: '82 Nguyễn Thị Thập, Phước Mỹ, Sơn Trà, Đà Nẵng', phone: '0987654321', role: 'teacher', checked: false }
  ];

  constructor(private notifier: ToastrNotifierService) { }

  Add(person: Person): void {
    this.peopleData.push(person);
  }

  Delete(item: any, itemsView: any[]): void {
    const dataIndex = this.peopleData.findIndex(i => i === item);
    this.peopleData.splice(dataIndex, 1);

    const dataIndex1 = itemsView.findIndex(i => i === item);
    itemsView.splice(dataIndex1, 1);
  }

  DeleteSelected(): void {
    this.peopleData = this.peopleData.filter(item => !item.checked);
  }
}