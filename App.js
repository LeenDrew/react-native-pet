import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View, StatusBar } from 'react-native';
import axios from 'axios';

export default function App() {
	const [lessonsList, setLessonsList] = useState([]);

	const fetchLessons = async () => {
		const result = await axios.get(
			'https://rasp.omgtu.ru/api/schedule/group/513?start=2021.02.15&finish=2021.02.28&lng=1',
		);
		setLessonsList(result.data);
	};

	useEffect(() => {
		fetchLessons();
	}, []);

	return (
		
		<>
		<Text>12345</Text>
			<StatusBar />
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
					<View style={styles.container}>
						<Text style={styles.screenTitle}>Расписание</Text>
					</View>
					{lessonsList &&
						lessonsList.map((item) => (
							<View
							
								key={
									item.date +
									item.disciplineOid +
									item.lecturerOid +
									item.streamOid +
									item.subGroupOid +
									item.lessonNumberStart
								}
								style={styles.sectionContainer}
							>
								<Text>{item.date}</Text>
								<Text>{item.discipline}</Text>
								<Text>{item.kindOfWork}</Text>
								<Text>{item.auditorium}</Text>
								<Text>{item.beginLesson}</Text>
								<Text>{item.endLesson}</Text>
								{item.stream && <Text>{item.stream}</Text>}
								{item.subGroup && <Text>{item.subGroup}</Text>}
								{item.group && <Text>{item.group}</Text>}
							</View>
						))}
				</ScrollView>
				<StatusBar style="auto" />
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	screenTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: '#000',
		marginTop: 32,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});
