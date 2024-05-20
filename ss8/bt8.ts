interface ObjectA {
    propA: number;
}

interface ObjectB {
    propB: string;
}

type CombinedObject = ObjectA & ObjectB;

const combineObjects = (objA: ObjectA, objB: ObjectB): boolean | CombinedObject => {
    // Kiểm tra xem objA và objB có đầy đủ các thuộc tính cần thiết không
    if ('propA' in objA && 'propB' in objB) {
        // Trả về true nếu đối tượng hợp lệ
        return true;
    } else {
        // Trả về false nếu đối tượng không hợp lệ
        return false;
    }
};

// Ví dụ sử dụng
const validObjectA: ObjectA = { propA: 10 };
const validObjectB: ObjectB = { propB: "hello" };
//const invalidObjectA: ObjectA = { propA: 10, extraProp: true }; // Lỗi ở đây

console.log(combineObjects(validObjectA, validObjectB)); // true
//console.log(combineObjects(validObjectA, invalidObjectA)); // false
