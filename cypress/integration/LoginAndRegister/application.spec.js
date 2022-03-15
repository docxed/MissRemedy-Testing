describe("MissRemedy", () => {
  const users = [
    {
      firstname: `อคิราภ์`,
      lastname: `สีแสนยง`,
      idcard: `9320508752456`,
      address: `เลขที่ 72 ถ.แจ้งวัฒนะ ต.ตลาดบางเขน อ.หลักสี่ รหัสไปรษณีย์ 10210`,
      hospital: `โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร`,
      patientid: `78948524`,
      password: `123456`,
    },
    {
      firstname: `พลัฏฐ์`,
      lastname: `วงศ์สิทธิพรรุ่ง`,
      idcard: `9320706352456`,
      address: `เลขที่ 72 ถ.แจ้งวัฒนะ ต.ตลาดบางเขน อ.หลักสี่ รหัสไปรษณีย์ 10210`,
      hospital: `โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร`,
      patientid: `78946524`,
      password: `123456`,
    },
  ];
  const doctors = [
    {
      firstname: `ปภัส`,
      lastname: `เงาธัมมะสกุล`,
      idcard: `9370507852456`,
      address: `เลขที่ 96 ถ.แจ้งวัฒนะ ต.ตลาดบางเขน อ.หลักสี่ รหัสไปรษณีย์ 10210`,
      license: `55948524`,
      password: `123456`,
    },
    {
      firstname: `พิชญะ`,
      lastname: `สิงห์มีศรี`,
      idcard: `9371487852456`,
      address: `เลขที่ 8716 ถ.แจ้งวัฒนะ ต.ตลาดบางเขน อ.หลักสี่ รหัสไปรษณีย์ 10210`,
      license: `55941524`,
      password: `123456`,
    },
  ];

  users.forEach((user, index) => {
    it(`User ID:${index + 1} ลงทะเบียน และ เข้าสู่ระบบ`, () => {
      cy.viewport(393, 851);

      // Register User
      cy.visit("http://localhost:19006/");
      cy.wait(2000);
      cy.get(".r-backgroundColor-sjsw4f > .css-text-901oao").click();
      cy.wait(2000);
      cy.get(":nth-child(1) > :nth-child(1) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(":nth-child(1) > :nth-child(1) > .css-textinput-11aywtz").type(
        user.firstname
      );

      cy.get(":nth-child(1) > :nth-child(2) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(":nth-child(1) > :nth-child(2) > .css-textinput-11aywtz").type(
        user.lastname
      );

      cy.get(
        ":nth-child(2) > .css-view-1dbjc4n > .css-textinput-11aywtz"
      ).clear(``);
      cy.get(":nth-child(2) > .css-view-1dbjc4n > .css-textinput-11aywtz").type(
        user.idcard
      );

      cy.get(
        ":nth-child(3) > .css-view-1dbjc4n > .css-textinput-11aywtz"
      ).clear(``);
      cy.get(":nth-child(3) > .css-view-1dbjc4n > .css-textinput-11aywtz").type(
        user.address
      );

      cy.get(
        ":nth-child(4) > .css-view-1dbjc4n > .css-textinput-11aywtz"
      ).clear(``);
      cy.get(":nth-child(4) > .css-view-1dbjc4n > .css-textinput-11aywtz").type(
        user.hospital
      );

      cy.get(":nth-child(5) > :nth-child(1) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(":nth-child(5) > :nth-child(1) > .css-textinput-11aywtz").type(
        user.patientid
      );

      cy.get(":nth-child(5) > :nth-child(2) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(":nth-child(5) > :nth-child(2) > .css-textinput-11aywtz").type(
        user.password
      );
      cy.get(":nth-child(6) > .css-view-1dbjc4n > .css-text-901oao").click();

      // Then login
      cy.wait(2000);
      cy.get(".r-flex-13awgt0 > :nth-child(1) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(".r-flex-13awgt0 > :nth-child(1) > .css-textinput-11aywtz").type(
        user.idcard
      );

      cy.get(".r-flex-13awgt0 > :nth-child(2) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(".r-flex-13awgt0 > :nth-child(2) > .css-textinput-11aywtz").type(
        user.password
      );
      cy.get(
        ":nth-child(3) > .r-flex-13awgt0 > :nth-child(3) > .css-view-1dbjc4n"
      ).click();

      // Then Check
      cy.wait(2000);
      cy.get(".r-fontSize-1i10wst").contains(
        `คุณ ${user.firstname} ${user.lastname}`
      );
      cy.get(
        '[style="align-items: flex-end; -webkit-box-align: end;"] > .css-text-901oao'
      ).click();
      cy.wait(2000);
    });
  });

  doctors.forEach((doctor, index) => {
    it(`Doctor ID:${index + 1} ลงทะเบียน และ เข้าสู่ระบบ`, () => {
      cy.viewport(393, 851);

      // Register Docter
      cy.visit("http://localhost:19006/");
      cy.wait(2000);

      cy.get(".r-backgroundColor-sjsw4f").click();
      cy.wait(2000);
      cy.get(".r-backgroundColor-19ij2jf").click();
      cy.wait(2000);

      cy.get(":nth-child(1) > :nth-child(1) > .css-textinput-11aywtz").clear(
        ""
      );
      cy.get(":nth-child(1) > :nth-child(1) > .css-textinput-11aywtz").type(
        doctor.firstname
      );

      cy.get(":nth-child(1) > :nth-child(2) > .css-textinput-11aywtz").clear(
        ""
      );
      cy.get(":nth-child(1) > :nth-child(2) > .css-textinput-11aywtz").type(
        doctor.lastname
      );

      cy.get(
        ":nth-child(2) > .css-view-1dbjc4n > .css-textinput-11aywtz"
      ).clear("");
      cy.get(":nth-child(2) > .css-view-1dbjc4n > .css-textinput-11aywtz").type(
        doctor.idcard
      );

      cy.get(
        ":nth-child(3) > .css-view-1dbjc4n > .css-textinput-11aywtz"
      ).clear("");
      cy.get(":nth-child(3) > .css-view-1dbjc4n > .css-textinput-11aywtz").type(
        doctor.address
      );

      cy.get(":nth-child(4) > :nth-child(1) > .css-textinput-11aywtz").clear(
        ""
      );
      cy.get(":nth-child(4) > :nth-child(1) > .css-textinput-11aywtz").type(
        doctor.license
      );

      cy.get(":nth-child(4) > :nth-child(2) > .css-textinput-11aywtz").clear(
        ""
      );
      cy.get(":nth-child(4) > :nth-child(2) > .css-textinput-11aywtz").type(
        doctor.password
      );

      cy.get(":nth-child(5) > .css-view-1dbjc4n > .css-text-901oao").click();

      // Then login
      cy.wait(2000);
      cy.get(":nth-child(3) > .css-text-901oao").click();
      cy.get(".r-flex-13awgt0 > :nth-child(1) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(".r-flex-13awgt0 > :nth-child(1) > .css-textinput-11aywtz").type(
        doctor.license
      );

      cy.get(".r-flex-13awgt0 > :nth-child(2) > .css-textinput-11aywtz").clear(
        ``
      );
      cy.get(".r-flex-13awgt0 > :nth-child(2) > .css-textinput-11aywtz").type(
        doctor.password
      );
      cy.get(
        ":nth-child(3) > .r-flex-13awgt0 > :nth-child(3) > .css-view-1dbjc4n"
      ).click();

      // Then Check
      cy.wait(2000);
      cy.get(".r-marginLeft-1joea0r > .r-fontSize-a023e6").contains(
        `คุณ ${doctor.firstname} ${doctor.lastname}`
      );
      cy.get(
        '[style="align-items: flex-end; -webkit-box-align: end;"] > .css-text-901oao'
      ).click();
      cy.wait(2000);
    });
  });
});
