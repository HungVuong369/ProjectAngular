export class Person {
    name: string;
    address: string;
    phone: string;
    role: string;
    checked: boolean;

    constructor(name: string, address: string, phone: string, personCategory: string, role: string, checked: boolean) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.role = role;
        this.checked = checked;
    }
}
