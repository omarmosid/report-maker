import React, { Component } from 'react';

import { Header, Grid } from 'semantic-ui-react';

import { PDFViewer } from '@react-pdf/renderer';

import StudentForm from './components/StudentForm/StudentForm.jsx';
import PdfOutput from './components/PdfOutput/PdfOutput.jsx';

import './App.css';

const lorem10 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const lorem20 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eu arcu id fringilla. Vestibulum vitae nibh augue. Ut vulputate';
const lorem30 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic non adipisci corporis voluptatem in quasi pariatur consequatur tempore sint et. Lorem ipsum dolor sit amet consectetur adipisicing elit.';

class App extends Component {

	state = {
		firstName : 'Omar Mohammad',
		lastName : '',
		topicsTaught: '',
		conUnd: '',
		listeningSkills: '',
		speakingSkills: '',
		readingSkills: '',
		ocSKills: '',
		psSkills: '',
		vocabGram: '',
		classInvolv: '',
		testPerf: '',
		sugg: '',
		comments: ''
	}

	handleChange = (event) => {
		console.log(event.target.name);
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	render() {
		return (
			<div className="App">
				<Grid 
					container={true}
					divided
					columns={2}
					className="fh"
				>
					<Grid.Row centered style={{padding: "40px 0px"}}>
						<Header as='h1' textAlign='center'>VHS Report Maker</Header>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column className="student-form">
							<StudentForm 
								handleChange={this.handleChange}
								firstName={this.state.firstName}
								lastName={this.state.lastName}
								topicsTaught={this.state.topicsTaught}
								conUnd={this.state.conUnd}
								listeningSkills={this.state.listeningSkills}
								speakingSkills={this.state.speakingSkills}
								readingSkills={this.state.readingSkills}
								ocSKills={this.state.ocSKills}
								psSkills={this.state.psSkills}
								vocabGram={this.state.vocabGram}
								classInvolv={this.state.classInvolv}
								testPerf={this.state.testPerf}
								sugg={this.state.sugg}
								comments={this.state.comments}
							/>
						</Grid.Column>
						<Grid.Column>
							<PDFViewer width="100%" height="100%">
								<PdfOutput 
									firstName={this.state.firstName}
									lastName={this.state.lastName}
									topicsTaught={this.state.topicsTaught}
									conUnd={this.state.conUnd}
									listeningSkills={this.state.listeningSkills}
									speakingSkills={this.state.speakingSkills}
									readingSkills={this.state.readingSkills}
									ocSKills={this.state.ocSKills}
									psSkills={this.state.psSkills}
									vocabGram={this.state.vocabGram}
									classInvolv={this.state.classInvolv}
									testPerf={this.state.testPerf}
									sugg={this.state.sugg}
									comments={this.state.comments}
								/>
							</PDFViewer>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default App;
