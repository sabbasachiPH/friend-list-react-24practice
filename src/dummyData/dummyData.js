var friends = [
	{"profile_pic":"https://live.staticflickr.com/65535/49694106703_127aa8bcbf_n.jpg","fistName": "Ezekiel", "lastName": "Tad", "DOB": "02-03-10", "basicSalary": 959310, "mobile": "88-499-10475-3642", "email": "mi.eleifend.egestas@Vestibulum.org", "id": 1},
	{"profile_pic":"https://live.staticflickr.com/65535/49694106763_7436a985c0_n.jpg","fistName": "Kevin", "lastName": "Zachery", "DOB": "16-09-17", "basicSalary": 127128, "mobile": "88-805-32707-6839", "email": "Sed.id.risus@Nunc.net", "id": 2},
	{"profile_pic":"https://live.staticflickr.com/65535/49694951552_109dde7bd9_m.jpg","fistName": "Gannon", "lastName": "Kenyon", "DOB": "20-06-97", "basicSalary": 745767, "mobile": "88-506-19812-4554", "email": "orci.Donec.nibh@tortor.ca", "id": 3},
	{"profile_pic":"https://live.staticflickr.com/65535/49694649971_8b23dfd9bf_m.jpg","fistName": "Cooper", "lastName": "Julian", "DOB": "08-07-83", "basicSalary": 402845, "mobile": "88-846-72481-6097", "email": "ornare.lectus@perinceptoshymenaeos.co.uk", "id": 4},
	{"profile_pic":"https://live.staticflickr.com/65535/49694649946_65d31d4b9b_m.jpg","fistName": "Addison", "lastName": "Xavier", "DOB": "21-12-04", "basicSalary": 217621, "mobile": "88-507-58314-2596", "email": "auctor@nec.edu", "id": 5},
	{"profile_pic":"https://live.staticflickr.com/65535/49694107578_3fbf2997c9_n.jpg","fistName": "Trevor", "lastName": "Ronan", "DOB": "15-07-81", "basicSalary": 247296, "mobile": "88-948-95837-3598", "email": "Nunc@auctor.net", "id": 6},
	{"profile_pic":"https://live.staticflickr.com/65535/49694107768_1ea1f23f4a_m.jpg","fistName": "Tiger", "lastName": "Ryder", "DOB": "13-07-81", "basicSalary": 372268, "mobile": "88-853-83451-3767", "email": "condimentum.Donec@egettincidunt.ca", "id": 7},
	{"profile_pic":"https://live.staticflickr.com/65535/49694649836_5d3e2c6ecf_n.jpg","fistName": "Jakeem", "lastName": "Dane", "DOB": "26-12-00", "basicSalary": 531878, "mobile": "88-415-11851-2021", "email": "a.auctor@cubiliaCurae.ca", "id": 8},
	{"profile_pic":"https://live.staticflickr.com/65535/49694649766_b687524495_n.jpg","fistName": "Clarke", "lastName": "Peter", "DOB": "25-11-19", "basicSalary": 74433, "mobile": "88-444-79388-1519", "email": "sed.dolor@Nullam.net", "id": 9},
	{"profile_pic":"https://live.staticflickr.com/65535/49694951272_92aac55fa1_n.jpg","fistName": "Clarke", "lastName": "Wang", "DOB": "18-10-91", "basicSalary": 205293, "mobile": "88-798-73342-7953", "email": "justo.Praesent@Donecfelisorci.org", "id": 10},
	{"profile_pic":"https://live.staticflickr.com/65535/49694107273_0c16a6117b_n.jpg","fistName": "Chaney", "lastName": "Gabriel", "DOB": "12-02-97", "basicSalary": 600503, "mobile": "88-275-96535-2024", "email": "enim.nec@euismodin.edu", "id": 11},
	{"profile_pic":"https://live.staticflickr.com/65535/49694107248_04511c44ed_n.jpg","fistName": "Otto", "lastName": "Dale", "DOB": "28-06-07", "basicSalary": 892715, "mobile": "88-664-91285-4873", "email": "laoreet.ipsum.Curabitur@lobortismauris.org", "id": 12},
	{"profile_pic":"https://live.staticflickr.com/65535/49694107213_21be426bd6_n.jpg","fistName": "Chadwick", "lastName": "Hayes", "DOB": "02-11-15", "basicSalary": 356752, "mobile": "88-663-98823-4248", "email": "magna.Suspendisse@mollisInteger.co.uk", "id": 13},
	{"profile_pic":"https://live.staticflickr.com/65535/49694950947_fac78f23fb_n.jpg","fistName": "Seth", "lastName": "Keefe", "DOB": "07-02-98", "basicSalary": 233727, "mobile": "88-215-63916-2623", "email": "Ut@lobortis.org", "id": 14},
	{"profile_pic":"https://live.staticflickr.com/65535/49694950882_8a09dba412_n.jpg","fistName": "Nigel", "lastName": "Yoshio", "DOB": "23-02-10", "basicSalary": 250313, "mobile": "88-964-50095-8501", "email": "eleifend@urnasuscipit.net", "id": 15},
	{"profile_pic":"https://live.staticflickr.com/65535/49694950842_26eb331f05_n.jpg","fistName": "Cooper", "lastName": "Stone", "DOB": "08-07-02", "basicSalary": 391297, "mobile": "88-424-86826-0908", "email": "tellus.imperdiet@arcuimperdiet.net", "id": 16},
	{"profile_pic":"https://live.staticflickr.com/65535/49694106868_52ac887dc5_n.jpg","fistName": "Brian", "lastName": "Neil", "DOB": "07-03-07", "basicSalary": 362052, "mobile": "88-614-35925-1013", "email": "Quisque.libero@mauris.ca", "id": 17},
	{"profile_pic":"https://joeschmoe.io/api/v1/${4}","fistName": "Micah", "lastName": "George", "DOB": "14-05-05", "basicSalary": 795170, "mobile": "88-156-68562-6260", "email": "pede.Suspendisse.dui@amet.co.uk", "id": 18},
	{"profile_pic":"https://joeschmoe.io/api/v1/${3}","fistName": "Micah", "lastName": "George", "DOB": "14-05-05", "basicSalary": 795170, "mobile": "88-156-68562-6260", "email": "pede.Suspendisse.dui@amet.co.uk", "id": 19},
	{"profile_pic":"https://joeschmoe.io/api/v1/${2}","fistName": "Micah", "lastName": "George", "DOB": "14-05-05", "basicSalary": 795170, "mobile": "88-156-68562-6260", "email": "pede.Suspendisse.dui@amet.co.uk", "id": 20},
	{"profile_pic":"https://joeschmoe.io/api/v1/${1}","fistName": "Micah", "lastName": "George", "DOB": "14-05-05", "basicSalary": 795170, "mobile": "88-156-68562-6260", "email": "pede.Suspendisse.dui@amet.co.uk", "id": 21},
];

export default friends;