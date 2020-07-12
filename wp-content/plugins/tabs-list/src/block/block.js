/**
 * BLOCK: tabs-list
 *
 */

import { RichText } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('cgb/block-tabs-list', {
	title: 'Tabs List',
	icon: 'excerpt-view',
	category: 'common',
	attributes: {
		header1: { type: 'string' },
		header2: { type: 'string' },
		header3: { type: 'string' },
		header4: { type: 'string' },
		header5: { type: 'string' },
		content1: { type: 'string' },
		content2: { type: 'string' },
		content3: { type: 'string' },
		content4: { type: 'string' },
		content5: { type: 'string' }
	},

	edit: (props) => {
		return (
			<div>
				<h3>Tab List</h3>
				<div>
					<h4>Header 1</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header1}
							onChange={() => props.setAttributes({ header1: event.target.value })}
						/>
					</p>

					<h4>Content 1</h4>
					<RichText
						tagName="div"
						value={props.attributes.content1}
						onChange={(content1) => props.setAttributes({ content1 })}
						placeholder={'Content 1'}
					/>
				</div>
				<div>
					<h4>Header 2</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header2}
							onChange={() => props.setAttributes({ header2: event.target.value })}
						/>
					</p>

					<h4>Content 2</h4>
					<RichText
						tagName="div"
						value={props.attributes.content2}
						onChange={(content2) => props.setAttributes({ content2 })}
					/>
				</div>
				<div>
					<h4>Header 3</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header3}
							onChange={() => props.setAttributes({ header3: event.target.value })}
						/>
					</p>

					<h4>Content 3</h4>
					<RichText
						tagName="div"
						value={props.attributes.content3}
						onChange={(content3) => props.setAttributes({ content3 })}
					/>
				</div>
				<div>
					<h4>Header 4</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header4}
							onChange={() => props.setAttributes({ header4: event.target.value })}
						/>
					</p>

					<h4>Content 4</h4>
					<RichText
						tagName="div"
						value={props.attributes.content4}
						onChange={(content4) => props.setAttributes({ content4 })}
					/>
				</div>
				<div>
					<h4>Header 5</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header5}
							onChange={() => props.setAttributes({ header5: event.target.value })}
						/>
					</p>

					<h4>Content 5</h4>
					<RichText
						tagName="div"
						value={props.attributes.content5}
						onChange={(content5) => props.setAttributes({ content5 })}
					/>
				</div>
			</div>
		);
	},

	save: (props) => {
		return (
			<div>
				<div class="nav-tab tabs-list">
					<ul class="nav nav-tabs bar-tabs">
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tab1">
									{props.attributes.header1}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tab2">
									{props.attributes.header2}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tab3">
									{props.attributes.header3}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tab4">
									{props.attributes.header4}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tab5">
									{props.attributes.header5}
								</a>
							</div>
						</li>
					</ul>

					<div class="tab-content">
						<div id="tab1" class="tab-pane fade show active">
							<RichText.Content tagName="div" value={props.attributes.content1} />
						</div>

						<div id="tab2" class="tab-pane fade">
							<RichText.Content tagName="div" value={props.attributes.content2} />
						</div>

						<div id="tab3" class="tab-pane fade">
							<RichText.Content tagName="div" value={props.attributes.content3} />
						</div>

						<div id="tab4" class="tab-pane fade">
							<RichText.Content tagName="div" value={props.attributes.content4} />
						</div>

						<div id="tab5" class="tab-pane fade">
							<RichText.Content tagName="div" value={props.attributes.content5} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});
