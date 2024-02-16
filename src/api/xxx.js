import ajax from "../tools/axios";

export const aaaa =(userid) => ajax("/my_cart/" + userid)

export const cccc =(course_id,student_id) => ajax("/remove_cart",{course_id,student_id})