/**
 * Model
 */
import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';

class RctModel extends Component {

	state = {
		open: false
	}

	open() {
		this.setState({ open: true });
	}

	close() {
		this.setState({ close: false });
	}

	render() {
		const { children, heading, footerEnable } = this.props;
		const { open } = this.state;
		return (
			<Modal
				isOpen={open}
				toggle={() => this.close()}
			>
				<ModalHeader toggle={() => this.close()}>
					{heading}
				</ModalHeader>
				<ModalBody>
					{children}
				</ModalBody>
				{footerEnable &&
					<ModalFooter>
						<div>
							<Button
								variant="raised"
								color="primary"
								className="text-white"
							>
								Update
							</Button>
							<Button
								variant="raised"
								className="btn-danger text-white"
							>
								Cancel
							</Button>
						</div>
					</ModalFooter>
				}
			</Modal>
		);
	}
}

export default RctModel;
