import { http } from '$lib/service/auth';

export async function getTrainingCourses() {
	try {
		const { data } = await http.get('training_course/');
		return {
			status: 200,
			data
		};
	} catch (err) {
		return Promise.resolve({
			status: 400,
			data: []
		});
	}
}

export async function getTrainingCourse(id) {
	try {
		const { data } = await http.get(`training_course/${id}/`);
		return {
			status: 200,
			data
		};
	} catch (err) {
		return Promise.resolve({
			status: 400
		});
	}
}

export async function updateTrainingCourse(payload) {
	try {
		const { data } = await http.put(`training_course/${payload.id}`, payload);
		return {
			status: 200,
			data
		};
	} catch (err) {
		return Promise.resolve({
			status: 403
		});
	}
}

export async function createTrainingCourse(payload) {
	try {
		const { data } = await http.post(`training_course/`, payload);
		return {
			status: 200,
			data
		};
	} catch (err) {
		return Promise.resolve({
			status: 403
		});
	}
}

export async function deleteTrainingCourse(id: number) {
	try {
		return http.delete(`training_course/${id}`);
	} catch (err) {
		return Promise.resolve();
	}
}
