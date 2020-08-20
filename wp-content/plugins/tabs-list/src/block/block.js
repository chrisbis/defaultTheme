/**
 * BLOCK: tabs-list
 *
 */

import { RichText } from "@wordpress/block-editor";
// import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("cgb/block-tabs-list", {
	title: "Tabs List",
	icon: "excerpt-view",
	category: "common",
	attributes: {
		header1: { type: "string" },
		header2: { type: "string" },
		header3: { type: "string" },
		header4: { type: "string" },
		header5: { type: "string" },
		header6: { type: "string" },
		content1: { type: "string" },
		content2: { type: "string" },
		content3: { type: "string" },
		content4: { type: "string" },
		content5: { type: "string" },
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
							onChange={() =>
								props.setAttributes({ header1: event.target.value })
							}
						/>
					</p>

					<h4>Content 1</h4>
					<RichText
						tagName="div"
						value={props.attributes.content1}
						onChange={(content1) => props.setAttributes({ content1 })}
						placeholder={"Content 1"}
					/>
				</div>
				<div>
					<h4>Header 2</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header2}
							onChange={() =>
								props.setAttributes({ header2: event.target.value })
							}
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
							onChange={() =>
								props.setAttributes({ header3: event.target.value })
							}
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
							onChange={() =>
								props.setAttributes({ header4: event.target.value })
							}
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
							onChange={() =>
								props.setAttributes({ header5: event.target.value })
							}
						/>
					</p>

					<h4>Content 5</h4>
					<RichText
						tagName="div"
						value={props.attributes.content5}
						onChange={(content5) => props.setAttributes({ content5 })}
					/>
				</div>
				<div>
					<h4>Header 6</h4>
					<p>
						<input
							type="text"
							value={props.attributes.header6}
							onChange={() =>
								props.setAttributes({ header6: event.target.value })
							}
						/>
					</p>

					<h4>Content 6</h4>
					<div>
						<InnerBlocks />
					</div>
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
								<a
									class="nav-link nav-tab active show"
									data-toggle="tab"
									href="#tabOne"
								>
									{props.attributes.header1}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tabTwo">
									{props.attributes.header2}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tabThree">
									{props.attributes.header3}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tabFour">
									{props.attributes.header4}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tabFive">
									{props.attributes.header5}
								</a>
							</div>
						</li>
						<li class="nav-item">
							<div class="nav-link-wrapper">
								<a class="nav-link nav-tab" data-toggle="tab" href="#tabSix">
									{props.attributes.header6}
								</a>
							</div>
						</li>
					</ul>

					<div class="tab-content">
						<div id="tabOne" class="tab-pane fade show active">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
									class="tab-header collapsed"
								>
									{props.attributes.header1}
								</h3>
								<div class="collapse" id="collapseOne">
									<RichText.Content
										tagName="div"
										value={props.attributes.content1}
									/>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<RichText.Content
									tagName="div"
									value={props.attributes.content1}
								/>
							</div>
						</div>

						<div id="tabTwo" class="tab-pane fade">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
									class="tab-header collapsed"
								>
									{props.attributes.header2}
								</h3>
								<div class="collapse" id="collapseTwo">
									<RichText.Content
										tagName="div"
										value={props.attributes.content2}
									/>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<RichText.Content
									tagName="div"
									value={props.attributes.content2}
								/>
							</div>
						</div>

						<div id="tabThree" class="tab-pane fade">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
									class="tab-header collapsed"
								>
									{props.attributes.header3}
								</h3>
								<div class="collapse" id="collapseThree">
									<RichText.Content
										tagName="div"
										value={props.attributes.content3}
									/>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<RichText.Content
									tagName="div"
									value={props.attributes.content3}
								/>
							</div>
						</div>

						<div id="tabFour" class="tab-pane fade">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
									class="tab-header collapsed"
								>
									{props.attributes.header4}
								</h3>
								<div class="collapse" id="collapseFour">
									<RichText.Content
										tagName="div"
										value={props.attributes.content4}
									/>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<RichText.Content
									tagName="div"
									value={props.attributes.content4}
								/>
							</div>
						</div>

						<div id="tabFive" class="tab-pane fade">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFive"
									class="tab-header collapsed"
								>
									{props.attributes.header5}
								</h3>
								<div class="collapse" id="collapseFive">
									<RichText.Content
										tagName="div"
										value={props.attributes.content5}
									/>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<RichText.Content
									tagName="div"
									value={props.attributes.content5}
								/>
							</div>
						</div>

						<div id="tabSix" class="tab-pane fade">
							<div class="d-block d-lg-none">
								<h3
									data-toggle="collapse"
									data-target="#collapseSix"
									aria-expanded="false"
									aria-controls="collapseSix"
									class="tab-header collapsed"
								>
									{props.attributes.header6}
								</h3>
								<div class="collapse" id="collapseSix">
									<div>
										<InnerBlocks.Content />
									</div>
								</div>
							</div>

							<div class="d-none d-lg-block">
								<div>
									<InnerBlocks.Content />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
