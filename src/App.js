import React, { Component } from 'react';

import { Header, Grid, Button } from 'semantic-ui-react';

import { PDFViewer, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import StudentForm from './components/StudentForm/StudentForm.jsx';
import PdfOutput from './components/PdfOutput/PdfOutput.jsx';

import './App.css';

const lorem10 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const lorem20 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eu arcu id fringilla. Vestibulum vitae nibh augue. Ut vulputate';
const lorem30 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic non adipisci corporis voluptatem in quasi pariatur consequatur tempore sint et. Lorem ipsum dolor sit amet consectetur adipisicing elit.';

class App extends Component {

	state = {
		firstName: 'Omar Mohammad',
		lastName: '',
		topicsTaught: '',
		conUnd: '',
		listeningSkills: '',
		speakingSkills: '',
		readingSkills: '',
		ocSkills: '',
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
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="col form-container">
						<StudentForm
							handleChange={this.handleChange}
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							topicsTaught={this.state.topicsTaught}
							conUnd={this.state.conUnd}
							listeningSkills={this.state.listeningSkills}
							speakingSkills={this.state.speakingSkills}
							readingSkills={this.state.readingSkills}
							ocSkills={this.state.ocSkills}
							psSkills={this.state.psSkills}
							vocabGram={this.state.vocabGram}
							classInvolv={this.state.classInvolv}
							testPerf={this.state.testPerf}
							sugg={this.state.sugg}
							comments={this.state.comments}
						/>
					</div>
					<div className="col pdf-container">
						<PDFViewer width="100%" height="100%">
							<PdfOutput
								firstName={this.state.firstName}
								lastName={this.state.lastName}
								topicsTaught={this.state.topicsTaught}
								conUnd={this.state.conUnd}
								listeningSkills={this.state.listeningSkills}
								speakingSkills={this.state.speakingSkills}
								readingSkills={this.state.readingSkills}
								ocSkills={this.state.ocSkills}
								psSkills={this.state.psSkills}
								vocabGram={this.state.vocabGram}
								classInvolv={this.state.classInvolv}
								testPerf={this.state.testPerf}
								sugg={this.state.sugg}
								comments={this.state.comments}
							/>
						</PDFViewer>
					</div>
				</div>
				{/* <div className="footer">
					<Button>Save Student Profile</Button>
				</div> */}
			</div>
		);
	}
}

export default App;
