import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class StudentForm extends Component {
	render() {
		return (
			<div>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input 
							fluid
							name='firstName'  
							label='First name' 
							placeholder='First name'
							onChange={(event) => this.props.handleChange(event)}
						/>
						{/* <Form.Input 
							fluid
							name='lastName' 
							label='Last name' 
							placeholder='Last name'
							onChange={(event) => this.props.handleChange(event)}
						/> */}
					</Form.Group>
					<br/><br/>
					{/* Topics taught */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='topicsTaught'  
							label='Topics taught' 
							placeholder='Topics taught'
							value={this.props.topicsTaught}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>
					{/* Conceptual Understanding */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='conUnd'  
							label='Conceptual Understanding' 
							placeholder='Conceptual Understanding'
							value={this.props.conUnd}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>
					<br/><br/>

					{/* Communication Skills */}
					<Form.Field>
						<label>Communication Skills</label>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='listeningSkills'  
							label='Listening Skills' 
							placeholder='Listening Skills'
							value={this.props.listeningSkills}
							onChange={(event) => this.props.handleChange(event)}
						/>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='speakingSkills'  
							label='Speaking Skills' 
							placeholder='Speaking Skills'
							value={this.props.speakingSkills}
							onChange={(event) => this.props.handleChange(event)}
						/>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='readingSkills'  
							label='Reading Skills' 
							placeholder='Reading Skills'
							value={this.props.readingSkills}
							onChange={(event) => this.props.handleChange(event)}
						/>
						<label>Writing Skills</label>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='ocSkills'  
							label='Organisation and content' 
							placeholder='Organisation and content'
							value={this.props.ocSkills}
							onChange={(event) => this.props.handleChange(event)}
						/>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='psSkills'  
							label='Presentation and submission' 
							placeholder='Presentation and submission'
							value={this.props.psSkills}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>
					<br/><br/>

					{/* Vocabulary and Grammer */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='vocabGram'  
							label='Vocabulary and Grammer' 
							placeholder='Vocabulary and Grammer'
							value={this.props.vocabGram}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>

					{/* Classroom involvement */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='classInvolv'  
							label='Classroom involvement' 
							placeholder='Classroom involvement'
							value={this.props.classInvolv}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>

					{/* Test performance */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='testPerf'  
							label='Test performance' 
							placeholder='Test performance'
							value={this.props.testPerf}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>

					{/* Suggestions regarding areas/skills to be improved */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='sugg'  
							label='Suggestions regarding areas/skills to be improved' 
							placeholder='Suggestions regarding areas/skills to be improved'
							value={this.props.sugg}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>

					{/* Comments */}
					<Form.Field>
						<Form.TextArea
							style={{ minHeight: 80 }}
							name='comments'  
							label='Comments' 
							placeholder='Comments'
							value={this.props.comments}
							onChange={(event) => this.props.handleChange(event)}
						/>
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default StudentForm
